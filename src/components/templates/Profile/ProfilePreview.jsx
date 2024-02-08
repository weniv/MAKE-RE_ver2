import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewProfileItem } from '../../atoms/PreviewItem'
import Spinner from '../../../assets/loader.svg'
import LinkIcon from '../../../assets/icon-link2.svg'
import { useParams } from 'react-router'
import { useResumeStore } from '../../../store/ResumeStore'

export default function ProfilePreview() {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const currentResume = resumeList.find((resume) => resume.id === id)
  const currentProfileData = currentResume.content.profile

  const { selectedResume } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const profileData = selectedResume?.profile ? selectedResume.profile : {}
  const [commitURL, setCommitURL] = useState(null)

  const theme = localStorage.getItem('themMode')

  const findRootColor = (mainColor) => {
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

  const githubID = profileData?.github?.[0]

  useEffect(() => {
    changeCommitColor(githubID)
  }, [githubID, mainColor])

  const changeCommitColor = (id) => {
    const color = mainColor.includes('var')
      ? findRootColor(mainColor).replace('#', '')
      : mainColor.replace('#', '')

    setCommitURL(`https://ghchart.rshah.org/${color}/${id}`)
  }

  return (
    <ProfileSection>
      {currentProfileData?.profileImg && (
        <ProfileImg mainColor={mainColor}>
          <img src={currentProfileData.profileImg} alt="" />
        </ProfileImg>
      )}

      <ProfileBox mainColor={mainColor}>
        <span>
          <strong>{currentProfileData.name}</strong>
          {currentProfileData.enName}
        </span>
        <DataList>
          {currentProfileData.phoneNumber && (
            <PreviewProfileItem
              title="전화번호"
              content={currentProfileData.phoneNumber}
            ></PreviewProfileItem>
          )}
          {currentProfileData.fullEmail !== '@' && (
            <PreviewProfileItem
              title="이메일"
              content={currentProfileData.fullEmail}
            ></PreviewProfileItem>
          )}
          <PreviewProfileItem
            title="경력 사항"
            content={currentProfileData.careerLength}
          ></PreviewProfileItem>
          <PreviewProfileItem
            title="깃허브 아이디"
            content={currentProfileData.github[0]}
          ></PreviewProfileItem>
          {commitURL ? (
            <img
              src={`https://ghchart.rshah.org/${currentProfileData.github[0]}`}
              className="commit"
              alt="깃허브 커밋기록 이미지"
            />
          ) : (
            <div className="loading">
              <img src={Spinner} alt="" />
            </div>
          )}
          {currentProfileData?.blog && (
            <LinkBox>
              <img src={LinkIcon} alt="" />
              <span>기술 블로그</span>
              <a href="">{currentProfileData.blog}</a>
            </LinkBox>
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
  width: 152px;
  height: 152px;
  border-radius: 100px;
  border-radius: 100px;
  border: 1px solid var(--grayLv2Color);
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
    margin-bottom: 16px;
    padding-bottom: 16px;
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
  display: flex;
  flex-direction: column;
  gap: 12px;

  img.commit {
    width: 100%;
    height: 95px;
    margin: 4px 0 4px;
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

const LinkBox = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background: #f3f5fa;

  span {
    color: var(--grayLv4Color);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border: none;
    margin: 0 12px 0 4px;
    padding: 0;
  }

  a {
    color: var(--surfaceColor);
    line-height: 20px;
  }
`
