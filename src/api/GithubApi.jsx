import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { gql, GraphQLClient } from 'graphql-request'
import axios from 'axios'
import DoughnutChart from './DoughnutChart'

export default function GithubApi() {
  const [queryString, setQueryString] = useState(window.location.search)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (!queryString) {
    redirectAuth()
    // } else {
    //   console.log('이미 인증됨')
    // }
  }

  //   console.log('userData', userData)

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TestBtn type="submit">깃허브 정보 불러오기(테스트)</TestBtn>
        </form>
      </div>

      {userData && userName ? (
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
      ) : null}
    </>
  )
}

const TestBtn = styled.button`
  font-weight: 700;
  font-size: 40px;
`

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 890px;
  margin: 0 auto;
  gap: 30px;

  img.profileImg {
    width: 200px;
    border-radius: 50%;
  }
`

const Title = styled.h1`
  font-weight: 700;
`

const PinnedRepo = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 200px;
  }
`