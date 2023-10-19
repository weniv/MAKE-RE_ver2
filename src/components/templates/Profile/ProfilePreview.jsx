import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import { PreviewProfileItem } from '../../atoms/PreviewItem'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

export default function ProfilePreview({ profileRef }) {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const profileData = data.profile
  const commitUrl = data.github[1]

  return (
    <>
      <ProfileSection ref={profileRef}>
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
            {commitUrl && (
              <img
                src={commitUrl}
                className="commit"
                alt="깃허브 커밋기록 이미지"
              />
            )}
          </DataList>
        </ProfileBox>
      </ProfileSection>
    </>
  )
}

const ProfileSection = styled.section`
  display: flex;
  gap: 40px;
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
  font-size: 14px;

  img.commit {
    width: 100%;
    margin-top: 12px;
  }
`
