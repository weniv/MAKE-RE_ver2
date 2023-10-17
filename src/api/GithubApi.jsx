import React, { useEffect, useState, useContext } from 'react'
import { styled } from 'styled-components'
import { gql, GraphQLClient } from 'graphql-request'
import axios from 'axios'
import { MainBtn } from '../components/atoms/Button'
import DoughnutChart from './DoughnutChart'
import ColorContext from '../context/ColorContext'
import ThemeContext from '../context/ThemeContext'
import AddImgIcon from '../assets/img-icon.svg'
import AddImgIconDark from '../assets/img-icon-dark.svg'
import { ResumeContext } from '../context/ResumeContext'

export const GithubContext = React.createContext()

export default function GithubApi({ children }) {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const { themeMode } = useContext(ThemeContext)
  const imgIcon = themeMode === 'light' ? AddImgIcon : AddImgIconDark

  const [queryString, setQueryString] = useState(window.location.search)
  const { mainColor } = useContext(ColorContext)
  const [colorCode, setColorCode] = useState(mainColor.split('#')[1])
  const [githubID, setGithubID] = useState(resumeData.github[0])
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState([])
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  })
  const [token, setToken] = useState({
    access_token: '',
    sexpires_in: '',
    refresh_token: '',
    refresh_token_expires_in: '',
  })
  const endpoint = `https://api.github.com/graphql`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token.access_token}`,
    },
  })

  const query = gql`
    {
      user(login: "${userName}") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
                openGraphImageUrl
                description
                languages(first: 6) {
                  edges {
                    node {
                      name
                      color
                    }
                  }
                }
                createdAt
              }
            }
          }
        }
        avatarUrl
        repositories(first: 100) {
          nodes {
            primaryLanguage {
                color
                name
                id
            }
          }
        }
      }
    }
  `

  useEffect(() => {
    authReq()
  }, [queryString])

  useEffect(() => {
    if (token.access_token) {
      getUserInfo()
    }
  }, [token.access_token])

  useEffect(() => {
    if (token.access_token) {
      getApi()
    }
  }, [userName])

  /** 불러온 사용자 정보로 resumeData를 수정 - 현재는 테스트로 사진만 변경하도록 구현 */
  //   const handleUpdate = (profileImg) => {
  //     setResumeData((current) => {
  //       let newResumeData = { ...current }
  //       newResumeData['profileImg'] = profileImg
  //       return newResumeData
  //     })
  //   }

  const getPrimaryLanguage = async (langs) => {
    const langObj = {}
    const colorObj = {}
    langs.map((lang, idx) => {
      if (lang.primaryLanguage?.name) {
        langObj[lang.primaryLanguage?.name]
          ? langObj[lang.primaryLanguage?.name]++
          : (langObj[lang.primaryLanguage?.name] = 1)
      }

      if (lang.primaryLanguage?.color) {
        colorObj[lang.primaryLanguage?.color]
          ? colorObj[lang.primaryLanguage?.color]++
          : (colorObj[lang.primaryLanguage?.color] = 1)
      }
    })

    const val = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    }

    // 언어 사용 %
    const numData = Object.values(langObj)
    const sum = numData.reduce((acc, cur) => acc + cur)
    const ratio = numData.map((data) => Math.floor((data / sum) * 100))

    val.labels = Object.keys(langObj)
    val.datasets[0].data = ratio
    val.datasets[0].backgroundColor = Object.keys(colorObj)
    val.datasets[0].borderColor = Object.keys(colorObj)

    setChartData(val)
  }

  /** 로그인한 사용자 정보로 api 통신하여 pinned repo, language 등 정보 가져옴 */
  const getApi = async () => {
    try {
      const data = await graphQLClient.request(query)
      setUserData(...userData, data.user)
      getPrimaryLanguage(data.user.repositories.nodes)
      loadCommitImg()
    } catch (err) {
      console.log(err)
    }
    // handleUpdate(data.user.avatarUrl)
  }

  /** accesss_token을 이용해 사용자 정보 가져옴 */
  const getUserInfo = async () => {
    const url = `https://api.github.com/user`

    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `token ${token.access_token}`,
        },
      })

      // console.log('result', result)
      setUserName(result.data.login)
      localStorage.setItem('userGithubId', result.data.login)
    } catch (err) {
      console.log(err)
    }
  }

  /** oauth 인증을 위해 redirect */
  const redirectAuth = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_clientID}`
  }

  /** access_token 발급을 위한 code */
  const authReq = async () => {
    const code = queryString.replace('?code=', '')
    if (code) {
      getUserToken(code)
    }
  }

  /** code를 이용하여 token 발급 */
  const getUserToken = async (code) => {
    const url = `/access_token`
    const codeData = code
    const headers = {
      accept: 'application/json',
    }
    const data = {
      client_id: process.env.REACT_APP_clientID,
      client_secret: process.env.REACT_APP_clientSecret,
      code: codeData,
    }

    try {
      const result = await axios.post(url, data, headers)

      result.data.split('&').map((el) =>
        setToken((current) => {
          let newToken = { ...current }
          newToken[el.split('=')[0]] = el.split('=')[1]
          return newToken
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    redirectAuth()
  }

  useEffect(() => {
    setColorCode(mainColor)
  }, [mainColor])

  // useEffect(() => {
  //   loadCommitImg()
  // }, [colorCode])

  // 깃허브 잔디 이미지 불러오기
  const [commitSrc, setCommitSrc] = useState(resumeData.github[1])
  const loadCommitImg = async () => {
    let src = ''

    const userId = localStorage.getItem('userGithubId')

    if (userId) {
      src =
        'https://ghchart.rshah.org/' + `/${colorCode.split('#')[1]}/` + userId
    }

    setCommitSrc(src)
  }

  const loadCommitImgWithID = (e) => {
    e.preventDefault()

    if (githubID) {
      const commitImg = `https://ghchart.rshah.org/${
        colorCode.split('#')[1]
      }/${githubID}`

      setCommitSrc(commitImg)
      setResumeData({ ...resumeData, github: [githubID, commitImg] })
      console.log(commitSrc)
    }
  }

  return (
    <>
      <GitHubCont>
        {/* <GithubForm onSubmit={handleSubmit}> */}
        <GithubForm>
          <div>
            <label htmlFor="githubId">GitHub ID</label>
            <input
              id="githubId"
              type="text"
              value={githubID}
              onChange={(e) => {
                setGithubID(e.target.value)
              }}
            />
          </div>
          <MainBtn type="preview" onClick={loadCommitImgWithID}>
            내 잔디 불러오기
          </MainBtn>
        </GithubForm>
      </GitHubCont>

      <Label>Contributions</Label>
      <CommitBox>
        {commitSrc ? (
          <CommitImg src={commitSrc} />
        ) : (
          <img src={imgIcon} alt="" />
        )}
      </CommitBox>

      {userData && userName ? (
        <Cont>
          {/* <Label>Pinned Repo</Label>
          <RepoWrap>
            {userData.pinnedItems &&
              userData.pinnedItems.edges.map((node, idx) => (
                <a
                  href={node.node.url}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={node.node.openGraphImageUrl} alt="" />
                </a>
              ))}
          </RepoWrap> */}
        </Cont>
      ) : null}

      {/* {userData && userName ? (
        <Cont>
          <img
            src={userData.avatarUrl}
            className="profileImg"
            alt={`${userName}님의 프로필 사진`}
          />
          <Title>Pinned Repo</Title>
          <PinnedRepo>
            {userData.pinnedItems &&
              userData.pinnedItems.edges.map((node, idx) => (
                <a
                  href={node.node.url}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={node.node.openGraphImageUrl} alt={`dd`} />
                </a>
              ))}
          </PinnedRepo>
          <DoughnutChart data={chartData} />
        </Cont>
      ) : null} */}
    </>
  )
}

const Label = styled.label`
  color: var(--gray-lv4-color);
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;

  img.profileImg {
    width: 200px;
    border-radius: 50%;
  }
`

const RepoWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  img {
    width: 100%;
  }
`

const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: bottom;
`

const GitHubCont = styled(FlexBox)`
  margin-bottom: 20px;

  button {
    align-self: flex-end;
  }
`

const GithubForm = styled.form`
  display: flex;
  gap: 8px;
  justify-content: flex-start;

  div {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;

    label {
      color: var(--gray-lv4-color);
      font-size: 12px;
    }

    input {
      width: 260px;
      height: 42px;
      padding: 11px 0 11px;
      padding-left: 16px;
      border-radius: 10px;
    }
  }
`

const CommitBox = styled.div`
  height: 160px;
  border-radius: 10px;
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--gray-lv1-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const CommitImg = styled.img`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`
