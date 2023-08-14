import { useState, useContext, useRef, useEffect } from 'react'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import MainBtn from '../../atoms/Button/MainBtn'
import { ResumeContext } from '../../../context/ResumeContext'
import { SkillList } from '../../atoms/SkillList'
import { ImgBtn } from '../../atoms/Button'
import { uploadImg, deleteImg } from '../../../utils'
import { updateProfile } from '../../../utils'
import { domainList, careerList } from '../../../data/profileDropbox'
import LicatFace from '../../../assets/icon-liacat.svg'
import * as styles from './Profile-style'
import ColorContext from '../../../context/ColorContext'
import GithubApi from '../../../api/GithubApi'

export default function Profile() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const [profileData, setProfileData] = useState(resumeData['profile'][0])
  const { mainColor } = useContext(ColorContext)
  const [colorCode, setColorCode] = useState(mainColor.split('#')[1])

  useEffect(() => {
    resumeData['profile'][0] = { ...profileData }
  }, [profileData])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('resumeData'))
    if (data) {
      setResumeData(data)
    }
  }, [])

  const fileRef = useRef(null)

  const handleButtonClick = () => {
    fileRef.current.click()
  }

  // 이메일 설정
  const [id, setId] = useState(profileData.fullEmail.split('@')[0])
  const [domain, setDomain] = useState(profileData.fullEmail.split('@')[1])

  useEffect(() => {
    const fullEmail = [id, domain].join('@')
    setProfileData({ ...profileData, fullEmail })
  }, [id, domain])

  // 엔터키 눌렀을 시, 기술 스택 추가
  const createSkillList = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      const newSkill = e.target.value
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill],
      })
      e.target.value = ''
    }
  }

  // 기술 스택 삭제
  const deleteSkillItem = (e, i) => {
    setProfileData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, idx) => idx !== i),
    }))
  }

  useEffect(() => {
    setColorCode(mainColor)
  }, [mainColor])

  useEffect(() => {
    loadCommitImg()
  }, [colorCode])

  // 깃허브 잔디 이미지 불러오기
  const [commitSrc, setCommitSrc] = useState('')
  const loadCommitImg = async () => {
    let src = ''

    const userId = localStorage.getItem('userGithubId')
    if (userId) {
      src =
        'https://ghchart.rshah.org/' + `/${colorCode.split('#')[1]}/` + userId
    }

    setCommitSrc(src)
  }

  return (
    <Layout>
      <styles.Section>
        <WriteTitle
          title="프로필"
          description="대략 본인의 프로필 정보를 입력해달라는 내용의 문구"
        />
        <styles.ProfileCont>
          <styles.ImgCont>
            <styles.ImgLabel
              ref={fileRef}
              htmlFor="profile-upload"
              className="profileImg"
            >
              {profileData.profileImg ? (
                <styles.ImgWrap>
                  <styles.Img
                    src={profileData.profileImg}
                    alt={`${
                      profileData.name || profileData.enName || '익명'
                    } 님의 프로필 이미지`}
                  />
                  <ImgBtn
                    type="delete"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    onClick={(e) => deleteImg(e, profileData, setProfileData)}
                  />
                </styles.ImgWrap>
              ) : (
                <styles.ImgWrap>
                  <styles.Img
                    src={LicatFace}
                    alt="프로필 기본 이미지"
                    className="defaultImg"
                  />
                  <ImgBtn
                    type="add"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    onClick={handleButtonClick}
                  />
                </styles.ImgWrap>
              )}
            </styles.ImgLabel>
            <input
              className="profileInput"
              type="file"
              accept="image/*"
              id="profile-upload"
              onChange={(e) => uploadImg(e, resumeData, setProfileData)}
            />
          </styles.ImgCont>

          <div>
            <styles.InputCont>
              <DefaultInput
                id="name"
                type="text"
                placeholder="예) 홍길동"
                width="220px"
                marginRight="12px"
                inputData={profileData.name}
                onChange={(e) => {
                  updateProfile(e, 'name', profileData, setProfileData)
                }}
              >
                이름
              </DefaultInput>
              <DefaultInput
                id="enName"
                type="text"
                placeholder="예) Kildong Hong"
                width="356px"
                inputData={profileData.enName}
                onChange={(e) => {
                  updateProfile(e, 'enName', profileData, setProfileData)
                }}
              >
                영문 이름
              </DefaultInput>
            </styles.InputCont>{' '}
            <styles.InputCont>
              <DefaultInput
                id="phoneNumber"
                type="text"
                placeholder="예) 010-1234-5678"
                width="220px"
                marginRight="12px"
                inputData={profileData.phoneNumber}
                onChange={(e) => {
                  updateProfile(e, 'phoneNumber', profileData, setProfileData)
                }}
              >
                전화번호
              </DefaultInput>
            </styles.InputCont>
            <styles.InputCont>
              <DefaultInput
                id="emailId"
                type="text"
                placeholder="예) paul-lab"
                width="220px"
                marginRight="12px"
                inputData={id}
                onChange={(e) => setId(e.target.value)}
              >
                이메일
              </DefaultInput>
              <span>@</span>
              <DefaultInput
                id="emailDomain"
                type="text"
                placeholder="예) paul-lab"
                width="200px"
                marginRight="8px"
                inputData={domain === '직접 입력' ? '' : domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <DropBox
                type="email"
                width="131"
                list={domainList}
                setDomain={setDomain}
              />
            </styles.InputCont>
            <styles.InputCont>
              <DefaultInput
                id="blog"
                type="url"
                onChange={(e) =>
                  updateProfile(e, 'blog', profileData, setProfileData)
                }
                inputData={profileData.blog}
              >
                기술 블로그 링크
              </DefaultInput>
            </styles.InputCont>
            <styles.Label>경력</styles.Label>
            <DropBox
              type="career"
              profileData={profileData}
              setProfileData={setProfileData}
              width="179"
              list={careerList}
            />
          </div>
        </styles.ProfileCont>
      </styles.Section>
      <styles.Line />
      <styles.Section>
        <WriteSubtitle subtitle="기술 스택" id="skills" />
        <Input
          id="skills"
          onKeyDown={createSkillList}
          type="text"
          placeholder="예) Python"
          width="260px"
        />
        <styles.SkillListWrap>
          {profileData.skills &&
            profileData.skills.map((skill, i) => (
              <SkillList
                key={i}
                type="delete"
                onClick={(e) => deleteSkillItem(e, i)}
              >
                {skill}
              </SkillList>
            ))}
        </styles.SkillListWrap>
      </styles.Section>
      <styles.Line />
      <styles.Section>
        <WriteSubtitle subtitle="GitHub" id="github" />
        <GithubApi/>
        {/* <styles.GitHubCont>
          <DefaultInput
            id="github"
            type="text"
            width="260px"
            onChange={(e) =>
              updateProfile(e, 'github', profileData, setProfileData)
            }
            inputData={profileData.github}
          >
            GitHub ID
          </DefaultInput>
            <MainBtn type="preview" onClick={loadCommitImg}>
              내 잔디 불러오기
            </MainBtn>
          
        </styles.GitHubCont>

        <styles.Label>Contributions</styles.Label>
        <styles.CommitBox>
          {commitSrc && <styles.CommitImg src={commitSrc} />}
        </styles.CommitBox> */}
      </styles.Section>
    </Layout>
  )
}
