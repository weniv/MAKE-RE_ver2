import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import { PreviewProfileItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

export default function ProfilePreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const profileData = data.profile
  const commitUrl = `https://ghchart.rshah.org/${
    mainColor.split('#')[1]
  }/${localStorage.getItem('userGithubId')}`

  return (
    <>
      <ProfileSection>
        <ProfileImg>
          <img src={profileData?.profileImg} alt="" />
        </ProfileImg>
        <ProfileBox>
          <span>
            <strong>{profileData?.name}</strong>
            {profileData?.enName}
          </span>
          <DataList>
            {/* 전화번호 */}
            <PreviewProfileItem
              title="전화번호"
              content={profileData?.phoneNumber}
            ></PreviewProfileItem>
            {/* 이메일 */}
            <PreviewProfileItem
              title="이메일"
              content={profileData?.fullEmail}
            ></PreviewProfileItem>
            {/* 기술 블로그 */}
            <PreviewProfileItem
              title="기술 블로그"
              type="link"
              content={profileData?.blog}
            ></PreviewProfileItem>
            {/* 경력사항 */}
            <PreviewProfileItem
              title="경력 사항"
              content={
                profileData.careerLength
                  ? `${profileData?.careerLength}년차`
                  : '신입'
              }
            ></PreviewProfileItem>
            <img
              src={commitUrl}
              className="commit"
              alt="깃허브 커밋기록 이미지"
            />
          </DataList>
        </ProfileBox>
      </ProfileSection>
      <Intro>
        <PreviewSubtitle>Introduction</PreviewSubtitle>
        <p>{profileData?.intro}</p>
      </Intro>
    </>
  )
}

const ProfileSection = styled.section`
  margin-bottom: 40px;
  display: flex;
  gap: 40px;
`

const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 2px solid var(--main-color);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileBox = styled.div`
  max-width: 620px;
  flex-basis: 620px;

  span {
    display: block;
    width: 620px;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: var(--main-color);
    border-bottom: 1px solid var(--main-color);
  }

  span strong {
    color: var(--font-color);
    font-size: 24px;
    font-weight: 700;
    padding-right: 12px;
  }
`

const DataList = styled.ul`
  font-size: 14px;

  img.commit {
    width: 100%;
    margin-top: 12px;
  }
`

const Intro = styled.div`
  p {
    word-wrap: break-word;
    line-height: 20px;
  }
`