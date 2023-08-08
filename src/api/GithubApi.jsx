import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { gql, GraphQLClient } from 'graphql-request'
import axios from 'axios'
import DoughnutChart from './DoughnutChart'

export default function GithubApi() {
  const [queryString, setQueryString] = useState(window.location.search)
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState([])
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

  const getPrimaryLanguage = (langs) => {
    const langObj = {}
    const langArr = []
    // console.log('get lang')
    // console.log('get', langs)
    langs.map((lang, idx) =>
      langObj[lang.primaryLanguage?.name]
        ? langObj[lang.primaryLanguage?.name]['ratio']++
        : (langObj[lang.primaryLanguage?.name]['ratio'] = 1)
    )

    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }

    console.log('langObj', langObj)
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
      setUserName(result.data.login)
    } catch (err) {
      console.log(err)
    }
  }

  /** oauth 인증을 위해 redirect */
  const redirectAuth = () => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=Iv1.1353321326fecccd'
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
      client_id: 'Iv1.1353321326fecccd',
      client_secret: '702fa73cb978200c7ade4eb29f05350ce4a6e9c1',
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

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">깃허브 정보 불러오기(테스트)</button>
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
          {/* <div>
            {userData.repositories &&
              userData.repositories.nodes.map((lang, idx) =>
                console.log(lang.primaryLanguage)
              )}
          </div> */}
          <DoughnutChart data={data} />
        </Cont>
      ) : null}
    </>
  )
}

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
