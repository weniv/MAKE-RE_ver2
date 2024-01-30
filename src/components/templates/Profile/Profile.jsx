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
import { GetCommitRecord } from '../../atoms/Github'

export default function Profile({ id, type }) {
  // const { resumeList, updateResumeData, saveResumeData } = useResumeStore()
  const { resumeList, updateProfileData } = useResumeStore()
  const storedResumeData = JSON.parse(
    localStorage.getItem('makere-resume-list')
  )
  const selectedResume = storedResumeData?.state.resumeList.find(
    (el) => el.id === Number(id)
  )

  const profileRef = useRef(null)

  /**
   * 최초 이력서 생성시 기본 프로필 정보 가져오는 함수
   * @param {number}  selectedResume - 현재 선택된 이력서의 프로필 정보
   * @return {string} 이력서 프로필 정보
   */

  // useEffect(() => {
  //   updateResumeData(id, 'profile', selectedResume.profile)
  // }, [selectedResume.profile])

  // console.log('selectedResume.profile', selectedResume.profile)
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

  // const getDefaultData = (key) => {
  //   const storedDefaultData = JSON.parse(
  //     localStorage.getItem('makere-default-profile')
  //   )

  //   if (storedDefaultData[key] && !selectedResume?.content.profile[key]) {
  //     return storedDefaultData[key]
  //   } else {
  //     return selectedResume?.content.profile[key]
  //   }
  // }

  const storedDefaultData = JSON.parse(
    localStorage.getItem('makere-default-profile')
  )

  const getDefaultData = (key) => {
    const profileData = selectedResume ? selectedResume.content.profile : ''
    if (storedDefaultData && !profileData[key]) {
      return storedDefaultData[key]
    } else {
      return profileData[key]
    }
  }

  const getDefaultArrayData = (key) => {
    const profileData = selectedResume ? selectedResume.content.profile : []

    if (storedDefaultData && profileData[key].length === 0) {
      console.log(1111, storedDefaultData[key])
      return storedDefaultData[key]
    } else {
      console.log(2222, profileData[key])
      return profileData[key]
    }
  }

  /**
   * 전화번호 사이에 하이픈 넣어주는 함수
   * @param {string}  num - 변환할 전화번호
   * @return {string} 하이픈을 넣어서 반환된 전화번호
   */
  const parsePhoneNumber = (num) => {
    return num
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
  }

  const [profileImg, setProfileImg] = useState(getDefaultData('profileImg'))
  const [name, setName] = useState(getDefaultData('name'))
  const [enName, setEnName] = useState(getDefaultData('enName'))
  const [phoneNumber, setPhonNumber] = useState(getDefaultData('phoneNumber'))
  const [blog, setBlog] = useState(getDefaultData('blog'))
  const [skills, setSkills] = useState(getDefaultArrayData('skills'))
  const [github, setGithub] = useState(getDefaultData('github'))

  // useEffect(() => {
  //   console.log('resumeList', resumeList)
  // }, [resumeList])

  useEffect(() => {
    updateProfileData(id, 'profileImg', profileImg)
  }, [profileImg])

  useEffect(() => {
    updateProfileData(id, 'skills', skills)
  }, [skills])

  useEffect(() => {
    updateProfileData(id, 'github', github)
  }, [github])

  const skillListRef = useRef(null)

  /**
   * 새로운 기술 스택 추가
   */
  const createSkillList = () => {
    const newSkill = skillListRef.current.value
    setSkills([...skills, newSkill])
    skillListRef.current.value = ''
  }

  /**
   * 기술 스택 삭제
   */
  const deleteSkillItem = (e, idx) => {
    const result = skills.filter((_, i) => i !== idx)
    setSkills(result)
  }

  return (
    <Layout>
      <>
        <styles.Section>
          <WriteTitle
            title="프로필"
            description="자신을 간단히 소개해 주세요."
          />
          <styles.ProfileCont>
            <styles.ImgCont>
              <styles.ImgLabel
                ref={profileRef}
                htmlFor="profile-upload"
                className="profileImg"
              >
                <styles.ImgWrap>
                  <styles.Img
                    src={profileImg ? profileImg : LicatFace}
                    alt={`${name || enName || '익명'} 님의 프로필 이미지`}
                  />
                  <ImgBtn
                    type="delete"
                    onClick={() => {
                      setProfileImg('')
                    }}
                  />
                </styles.ImgWrap>
              </styles.ImgLabel>
              <input
                className="profileInput"
                type="file"
                accept="image/*"
                id="profile-upload"
                onChange={(e) => {
                  uploadImg(e, profileImg, setProfileImg)
                }}
              />
            </styles.ImgCont>
            <div>
              <styles.InputCont>
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
                    updateProfileData(id, 'name', e.target.value)
                  }}
                >
                  이름
                </DefaultInput>
                <DefaultInput
                  id="enName"
                  type="text"
                  placeholder="예) Kildong Hong"
                  width="356px"
                  inputData={enName}
                  onChange={(e) => {
                    setEnName(e.target.value)
                    updateProfileData(id, 'enName', e.target.value)
                  }}
                >
                  영문 이름
                </DefaultInput>
              </styles.InputCont>

              <styles.InputCont>
                <DefaultInput
                  id="phoneNumber"
                  type="tel"
                  placeholder="예) 010-1234-5678"
                  width="220px"
                  marginRight="12px"
                  inputData={phoneNumber}
                  onChange={(e) => {
                    console.log('11', e.target.value)
                    setPhonNumber(parsePhoneNumber(e.target.value))
                    updateProfileData(
                      id,
                      'phoneNumber',
                      parsePhoneNumber(e.target.value)
                    )
                  }}
                >
                  전화번호
                </DefaultInput>
              </styles.InputCont>
              <styles.InputCont>
                {/* <DefaultInput
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
                /> */}
              </styles.InputCont>
              <styles.InputCont>
                <DefaultInput
                  id="blog"
                  type="url"
                  onChange={(e) => {
                    setBlog(e.target.value)
                    updateProfileData(id, 'blog', e.target.value)
                  }}
                  inputData={blog}
                >
                  기술 블로그 링크
                </DefaultInput>
              </styles.InputCont>
              {/* <styles.Label>경력</styles.Label>
              <DropBox
                type="career"
                profileData={profileData}
                setProfileData={setProfileData}
                width="179"
                list={careerList}
              /> */}
            </div>
          </styles.ProfileCont>
        </styles.Section>
        <styles.Line />
        <styles.Section>
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
            {skills &&
              skills.map((skill, i) => (
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
          <GetCommitRecord github={github} setGithub={setGithub} />
        </styles.Section>
      </>
    </Layout>
  )
}
