import { useState, useContext, useRef, useEffect } from 'react'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import { ResumeContext } from '../../../context/ResumeContext'
import { SkillList } from '../../atoms/SkillList'
import { AddBtn, ImgBtn } from '../../atoms/Button'
import { uploadImg, deleteImg, updateData } from '../../../utils'
import { updateProfile } from '../../../utils'
import { domainList, careerList } from '../../../data/profileDropbox'
import LicatFace from '../../../assets/icon-liacat.svg'
import * as styles from './Profile-style'
import ColorContext from '../../../context/ColorContext'
import GithubApi from '../../../api/GithubApi'
import { useResumeStore } from '../../../store/ResumeStore'

export default function Profile({ id, type }) {
  const { resumeList, updateResumeData } = useResumeStore()
  const { resumeData, setResumeData } = useContext(ResumeContext)
  // const selectedResume = resumeData.find((resume) => String(resume.id) === id)
  const selectedResume = resumeList.find(
    (resume) => resume.id === parseInt(id)
  ).content

  /**
   * 최초 이력서 생성시 기본 프로필 정보 가져오는 함수
   * @param {number}  selectedResume - 현재 선택된 이력서의 프로필 정보
   * @return {string} 이력서 프로필 정보
   */
  const getDefaultProfile = (selectedResume) => {
    const defaultProfileData = JSON.parse(
      localStorage.getItem('makere-default-profile')
    )
    return selectedResume?.profile.name
      ? selectedResume?.profile
      : defaultProfileData
  }

  useEffect(() => {
    getDefaultProfile(selectedResume)
  }, [selectedResume])

  // 프로필 정보 state
  const [profileData, setProfileData] = useState(
    getDefaultProfile(selectedResume)
  )

  console.log('profileData', selectedResume.profile)
  // console.log('resumeList', resumeList)

  // const { mainColor } = useContext(ColorContext)
  // const [colorCode, setColorCode] = useState(mainColor.split('#')[1])
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [isChange, setIsChange] = useState(false)
  // const skillListRef = useRef(null)

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('profileData'))

  //   if (data) {
  //     setEmailId(data['fullEmail'].split('@')[0])
  //     setDomain(data['fullEmail'].split('@')[1])
  //     setResumeData(data)
  //     setIsLoaded(true)
  //   }
  // }, [])

  // useEffect(() => {
  //   const updatedResumeData = resumeData.map((resume) => {
  //     if (String(resume.id) === id) {
  //       return { ...resume, profile: profileData }
  //     }
  //     return resume
  //   })

  //   setResumeData(updatedResumeData)
  // }, [profileData])

  // const fileRef = useRef(null)

  // const handleButtonClick = () => {
  //   fileRef.current.click()
  // }

  // // 이메일 설정
  // const [emailId, setEmailId] = useState('')
  // const [domain, setDomain] = useState('')

  // useEffect(() => {
  //   if (emailId !== '' && domain !== '') {
  //     const fullEmail = [emailId, domain].join('@')
  //     setProfileData({ ...profileData, fullEmail })
  //   }
  // }, [emailId, domain])

  // // 기술 스택 추가
  // const createSkillList = () => {
  //   const newSkill = skillListRef.current.value
  //   setProfileData({
  //     ...profileData,
  //     skills: [...profileData.skills, newSkill],
  //   })
  //   skillListRef.current.value = ''
  // }

  // // 기술 스택 삭제
  // const deleteSkillItem = (e, i) => {
  //   setProfileData((prevData) => ({
  //     ...prevData,
  //     skills: prevData.skills.filter((_, idx) => idx !== i),
  //   }))
  // }

  // useEffect(() => {
  //   setColorCode(mainColor)
  // }, [mainColor])

  // useEffect(() => {
  //   loadCommitImg()
  // }, [colorCode])

  // // 깃허브 잔디 이미지 불러오기
  // const [commitSrc, setCommitSrc] = useState('')
  // const loadCommitImg = async () => {
  //   let src = ''

  //   const userId = localStorage.getItem('userGithubId')
  //   if (userId) {
  //     src =
  //       'https://ghchart.rshah.org/' + `/${colorCode.split('#')[1]}/` + userId
  //   }

  //   setCommitSrc(src)
  // }

  const getDefaultData = (key) => {
    if (profileData) {
      return profileData[key]
    } else {
      return ''
    }
  }

  const [name, setName] = useState(getDefaultData('name'))

  // 콘솔을 찍어보자
  useEffect(() => {
    // console.log('name', name)
  }, [])

  // console.log('selectedResume', selectedResume.profile)

  return (
    <Layout>
      <>
        <styles.Section>
          <WriteTitle
            title="프로필"
            description="자신을 간단히 소개해 주세요."
          />
          <h2
            onClick={() => {
              console.log(1111111)
              updateResumeData(id, 'profile', selectedResume.profile)
            }}
          >
            저장해보자
          </h2>
          <styles.ProfileCont>
            {/* <styles.ImgCont>
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
                onChange={(e) => uploadImg(e, profileData, setProfileData)}
              />
            </styles.ImgCont> */}

            <div>
              <styles.InputCont>
                {/* 이름 */}
                <DefaultInput
                  essentialMsg="*필수 입력 정보입니다."
                  id="name"
                  name="name"
                  type="text"
                  placeholder="예) 홍길동"
                  width="220px"
                  marginRight="12px"
                  inputData={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    selectedResume.profile.name = e.target.value
                    // setProfileData((prev) => ({
                    //   ...prev,
                    //   [e.target.name]: e.target.value,
                    // }))
                    // updateProfile(e, 'name', profileData, setProfileData)
                  }}
                >
                  이름
                </DefaultInput>
                {/* 영문 이름 */}
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
              </styles.InputCont>

              <styles.InputCont>
                {/* 전화번호 */}
                <DefaultInput
                  id="phoneNumber"
                  type="tel"
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
              {/* 이메일 */}
              <styles.InputCont>
                <DefaultInput
                  id="emailId"
                  type="text"
                  placeholder="예) paul-lab"
                  width="220px"
                  marginRight="12px"
                  // inputData={emailId}
                  inputData={profileData.fullEmail.split('@')[0]}
                  onChange={(e) => {
                    console.log(profileData)
                    // setEmailId(e.target.value)
                  }}
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
                  // inputData={domain === '직접 입력' ? '' : domain}
                  inputData={profileData.fullEmail.split('@')[1]}
                  onChange={(e) => {
                    // setDomain(e.target.value)
                    // setIsChange(true)
                  }}
                />
                <DropBox
                  type="email"
                  width="131"
                  list={domainList}
                  // setDomain={setDomain}
                  // setIsChange={setIsChange}
                  // isChange={isChange}
                />
              </styles.InputCont>
              <styles.InputCont>
                {/* 기술 블로그 링크 */}
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
              {/* 경력 */}
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
        {/* <styles.Section>
          <WriteSubtitle subtitle="기술 스택" id="skills" />
          <form
            className="inputWrap"
            id="addSkillsListForm"
            onSubmit={(e) => {
              e.preventDefault()
              createSkillList()
            }}
          >
            <Input
              id="skills"
              type="text"
              placeholder="예) Python"
              width="260px"
              ref={skillListRef}
            />
            <AddBtn form="addSkillsListForm" />
          </form>
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
        </styles.Section> */}
        <styles.Line />
        {/* <styles.Section>
          <WriteSubtitle subtitle="GitHub" id="github" />
          <GithubApi />
        </styles.Section> */}
      </>
    </Layout>
  )
}
