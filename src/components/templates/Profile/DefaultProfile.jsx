import { useState, useContext, useRef, useEffect } from 'react'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import { SkillList } from '../../atoms/SkillList'
import { AddBtn, ImgBtn } from '../../atoms/Button'
import { uploadImg, deleteImg } from '../../../utils'
import { updateProfile } from '../../../utils'
import { domainList, careerList } from '../../../data/profileDropbox'
import LicatFace from '../../../assets/icon-liacat.svg'
import * as styles from './Profile-style'
import ColorContext from '../../../context/ColorContext'
import GithubApi from '../../../api/GithubApi'
import { ProfileContext } from '../../../context/ProfileContext'
import { MainBtn } from '../../atoms/Button'
import { useResumeStore } from '../../../store/ResumeStore'
import { useDefaultProfileStore } from '../../../store/DefaultProfileStore'

export default function DefaultProfile({ type }) {
  const { resumeList, updateResumeData } = useResumeStore()
  const {
    defaultProfileName,
    updateDefaultProfileName,
    defaultProfileData,
    updateDefaultProfile,
    updateDefaultDataWithVal,
  } = useDefaultProfileStore()

  const storedData = JSON.parse(localStorage.getItem('makere-default-profile'))

  // const getDefaultProfileData = () => {
  //   const storedData = JSON.parse(
  //     localStorage.getItem('makere-default-profile')
  //   )
  //   return storedData
  //     ? storedData
  //     : {
  //         profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png', // 프로필 이미지 테스트용
  //         name: '',
  //         enName: '',
  //         phoneNumber: '',
  //         fullEmail: '',
  //         blog: '',
  //         careerLength: 0,
  //         skills: [],
  //         github: [],
  //         intro: '',
  //       }
  // }
  // const [data, setData] = useState(getDefaultProfileData)

  // const { profileData, setProfileData } = useContext(ProfileContext)
  // const { mainColor } = useContext(ColorContext)
  // const [colorCode, setColorCode] = useState(mainColor.split('#')[1])
  // const [isLoaded, setIsLoaded] = useState(false)
  const [isChange, setIsChange] = useState(false)
  // const skillListRef = useRef(null)

  // console.log('resumeList', resumeList)

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('profileData'))
  //   if (data) {
  //     setId(data['fullEmail'].split('@')[0])
  //     setDomain(data['fullEmail'].split('@')[1])
  //     setIsLoaded(true)
  //   }
  // }, [])

  // const fileRef = useRef(null)

  // const handleButtonClick = () => {
  //   fileRef.current.click()
  // }

  // // 이메일 설정
  // const getStoredEmailId = () => {
  //   const store = storedData?.fullEmail?.split('@')[0]
  //   return store ? store : ''
  // }

  // const [id, setId] = useState(getStoredEmailId())
  // const [domain, setDomain] = useState('')

  // useEffect(() => {
  //   // let email = []
  //   let fullEmail = [id, domain].join('@')
  //   updateDefaultDataWithVal('fullEmail', fullEmail)

  //   // console.log('result', result.split('@'))
  // }, [id, domain])

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

  // const handleDefaultProfileData = (e) => {
  //   updateDefaultProfile(e)
  // }

  // const handleSaveData = (key, value) => {
  //   saveDefaultProfile()

  //   if (storedData && key && value) {
  //     storedData[key] = value
  //     // localStorage.setItem('makere-default-profile', JSON.stringify(userData))
  //   }
  // }

  /**
   * 저장된 기본 프로필 데이터 불러오는 함수
   * @param {string}  key - 불러올 기본 프로필 key
   * @return {string | number | [string]} 해당 키 값을 가진 기본 프로필 value
   */
  const getStoredData = (key) => {
    if (storedData) {
      return storedData[key]
    } else {
      return ''
    }
  }

  // 기본 프로필 관련 state
  const [name, setName] = useState(getStoredData('name')) // 이름
  const [enName, setEnName] = useState(getStoredData('enName')) // 영문 이름
  const [phoneNumber, setPhoneNumber] = useState(getStoredData('phoneNumber')) // 전화번호
  const [blog, setBlog] = useState(getStoredData('blog')) // 기술 블로그 링크
  const [fullEmail, setFullEmail] = useState(getStoredData('fullEmail')) // 이메일

  /**
   * 저장된 이메일 id와 이메일 domain 값을 가져오는 함수
   * @param {number}  idx - 가져올 이메일 구성요소의 인덱스 (0-id, 1-domain)
   * @return {string} 이메일 구성요소
   */
  const getStoreEmailPart = (idx) => {
    if (fullEmail) {
      return fullEmail.split('@')[idx]
    } else {
      return ''
    }
  }

  // 이메일 관련 state
  const [emailId, setEmailId] = useState(getStoreEmailPart(0))
  const [emailDomain, setEmailDomain] = useState(getStoreEmailPart(1))

  /**
   * 이메일 구성요소(id, domain)을 조합하여 완전한 이메일을 구성하는 함수
   * @param {string}  id - 이메일 id (@ 기준 앞 부분)
   * @param {string}  id - 이메일 domain (@ 기준 뒷 부분)
   * @return {string} 이메일 (fullEmail)
   */
  const joinEmail = (id, domain) => {
    let email = [id, domain].join('@')
    return email
  }

  useEffect(() => {
    const email = joinEmail(emailId, emailDomain)
    setFullEmail(email)
  }, [emailId, emailDomain])

  /**
   * 로컬 스토리지에 정보 저장하는 함수, 저장할 정보를 val 객체안에 삽입
   */
  const saveLocalStorage = () => {
    console.log('저장 버튼 클릭됨')
    const val = {
      name: defaultProfileName,
      enName,
      phoneNumber,
      blog,
      fullEmail,
    }

    if (!defaultProfileName.trim()) {
      alert('이름을 입력하세요.')
    } else {
      localStorage.setItem('makere-default-profile', JSON.stringify(val))
      alert('프로필이 저장되었습니다.')
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

  return (
    <Layout>
      <>
        <styles.Section>
          <styles.TitleCont>
            <WriteTitle
              title="기본 프로필"
              description="서비스에서 사용될 기본 프로필 정보를 작성해 주세요."
            />
            <MainBtn
              type="save"
              onClick={() => {
                console.log('프로필 저장')
                saveLocalStorage()
              }}
            >
              프로필 저장하기
            </MainBtn>
          </styles.TitleCont>
          <styles.ProfileCont>
            {/* <styles.ImgCont>
              <styles.ImgLabel
                ref={fileRef}
                htmlFor="profile-upload"
                className="profileImg"
              >
                {testData.profileImg ? (
                  <styles.ImgWrap>
                    <styles.Img
                      src={testData.profileImg}
                      alt={`${
                        testData.name || testData.enName || '익명'
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
                    updateDefaultProfileName(e)
                    updateDefaultProfile(e)
                    setName(e.target.value)
                  }}
                >
                  이름
                </DefaultInput>
                {/* 영문 이름 */}
                <DefaultInput
                  id="enName"
                  name="enName"
                  type="text"
                  placeholder="예) Kildong Hong"
                  width="356px"
                  inputData={enName}
                  onChange={(e) => {
                    updateDefaultProfile(e)
                    setEnName(e.target.value)
                  }}
                >
                  영문 이름
                </DefaultInput>
              </styles.InputCont>
              <styles.InputCont>
                {/* 전화번호 */}
                <DefaultInput
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="예) 010-1234-5678"
                  width="220px"
                  marginRight="12px"
                  inputData={phoneNumber}
                  onChange={(e) => {
                    updateDefaultProfile(e)
                    setPhoneNumber(parsePhoneNumber(e.target.value))
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
                  inputData={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value)
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
                  inputData={emailDomain}
                  onChange={(e) => {
                    setEmailDomain(e.target.value)
                    setIsChange(true)
                  }}
                />
                <DropBox
                  type="email"
                  width="131"
                  list={domainList}
                  setDomain={setEmailDomain}
                  setIsChange={setIsChange}
                  isChange={isChange}
                />
              </styles.InputCont>
              {/* 블로그 링크 */}
              <styles.InputCont>
                <DefaultInput
                  id="blog"
                  name="blog"
                  type="url"
                  inputData={blog}
                  onChange={(e) => {
                    updateDefaultProfile(e)
                    setBlog(e.target.value)
                  }}
                >
                  기술 블로그 링크
                </DefaultInput>
              </styles.InputCont>
              {/* <styles.InputCont>
                <DefaultInput
                  id="emailId"
                  type="text"
                  placeholder="예) paul-lab"
                  width="220px"
                  marginRight="12px"
                  inputData={
                    storedData?.fullEmail
                      ? storedData?.fullEmail?.split('@')[0]
                      : id
                  }
                  onChange={(e) => {
                    setId(e.target.value)
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
                  inputData={domain === '직접 입력' ? '' : domain}
                  onChange={(e) => {
                    setDomain(e.target.value)
                    setIsChange(true)
                  }}
                />
                <DropBox
                  type="email"
                  width="131"
                  list={domainList}
                  setDomain={setDomain}
                  setIsChange={setIsChange}
                  isChange={isChange}
                />
              </styles.InputCont>
              <styles.InputCont>
                <DefaultInput
                  id="blog"
                  name="blog"
                  type="url"
                  inputData={blog}
                  onChange={(e) => {
                    updateDefaultProfile(e)
                    setBlog(e.target.value)
                  }}
                >
                  기술 블로그 링크
                </DefaultInput>
              </styles.InputCont> */}
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
          {/* <WriteSubtitle subtitle="기술 스택" id="skills" />
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
          </styles.SkillListWrap> */}
        </styles.Section>
        <styles.Line />
        <styles.Section>
          {/* <WriteSubtitle subtitle="GitHub" id="github" />
          <GithubApi /> */}
        </styles.Section>
      </>
    </Layout>
  )
}
