import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { ResumeContext } from '../../../context/ResumeContext'

import { PreviewProfileItem } from '../../atoms/PreviewItem'
import Spinner from '../../../assets/loader.svg'

export default function ProfilePreview() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const profileData = data.profile
  const [commitUrl, setCommitUrl] = useState(
    data.github && data.github[1] ? data.github[1] : null
  )

  const theme = localStorage.getItem('themMode')

  const findRootColor = (variable) => {
    switch (mainColor) {
      case 'var(--code-purple)':
        return theme === 'light' ? '#964dd1' : '#c893fd'
      case 'var(--code-pink)':
        return theme === 'light' ? '#c93864' : '#ed4779'
      case 'var(--primary-color)':
        return theme === 'light' ? '#2e6ff2' : '#3075ff'
      case 'var(--code-green)':
        return theme === 'light' ? '#328026' : '#50c140'
      case 'var(--code-orange)':
        return theme === 'light' ? '#ed7200' : '#ffa52a'
      default:
        return theme === 'light' ? '#2e6ff2' : '#3075ff'
    }
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data.github && data.github[1]) {
      setIsLoading(true)
      const githubID = commitUrl.split('/')[4]

      if (mainColor.split('#')[1]) {
        setCommitUrl(
          `https://ghchart.rshah.org/${mainColor.split('#')[1]}/${githubID}`
        )
      } else {
        const rootColorCode = findRootColor(mainColor)
        setCommitUrl(
          `https://ghchart.rshah.org/${rootColorCode.split('#')[1]}/${githubID}`
        )
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 700)

      setResumeData({
        ...resumeData,
        github: [data.github[0], commitUrl],
      })
    }
  }, [mainColor])

  return (
    <ProfileSection>
      {profileData?.profileImg && (
        <ProfileImg mainColor={mainColor}>
          <img src={profileData?.profileImg} alt="" />
        </ProfileImg>
      )}

      <ProfileBox mainColor={mainColor}>
        <span>
          <strong>{profileData?.name}</strong>
          {profileData?.enName}
        </span>
        <DataList>
          {/* 전화번호 */}
          {profileData?.phoneNumber && (
            <PreviewProfileItem
              title="전화번호"
              content={profileData?.phoneNumber}
            ></PreviewProfileItem>
          )}

          {/* 이메일 */}
          {profileData?.fullEmail !== '@' && (
            <PreviewProfileItem
              title="이메일"
              content={profileData?.fullEmail}
            ></PreviewProfileItem>
          )}

          {/* 기술 블로그 */}
          {profileData?.blog && (
            <PreviewProfileItem
              title="기술 블로그"
              type="link"
              content={profileData?.blog}
            ></PreviewProfileItem>
          )}

          {/* 경력사항 */}
          <PreviewProfileItem
            title="경력 사항"
            content={
              profileData.careerLength
                ? `${profileData?.careerLength}년차`
                : '신입'
            }
          ></PreviewProfileItem>
          {commitUrl && !isLoading ? (
            <img
              src={commitUrl}
              className="commit"
              alt="깃허브 커밋기록 이미지"
            />
          ) : (
            commitUrl && (
              <div className="loading">
                <img src={Spinner} alt="" />
              </div>
            )
          )}
        </DataList>
      </ProfileBox>
    </ProfileSection>
  )
}

const ProfileSection = styled.section`
  display: flex;
  gap: 40px;
  page-break-inside: avoid;
  break-inside: avoid;
`

const ProfileImg = styled.div`
  width: 142px;
  height: 142px;
  border-radius: 100px;
  border: ${(props) => `2px solid ${props.mainColor}`};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileBox = styled.div`
  width: 100%;

  span {
    display: block;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: ${(props) => props.mainColor};
    border-bottom: ${(props) => `1px solid ${props.mainColor}`};
  }

  span strong {
    color: var(--surface-color);
    font-size: 24px;
    font-weight: 700;
    padding-right: 12px;
  }
`

const DataList = styled.ul`
  color: var(--surface-color);
  font-size: 14px;

  img.commit {
    width: 100%;
    height: 95px;
    margin-top: 12px;
  }

  div.loading {
    width: 100%;
    height: 107px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
    }
  }
`
