import { useState, useRef, useEffect } from 'react'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import { SkillList } from '../../atoms/SkillList'
import { AddBtn, ImgBtn } from '../../atoms/Button'
import { uploadImg } from '../../../utils'
import { domainList, careerList } from '../../../data/profileDropbox'
import LicatFace from '../../../assets/icon-liacat.svg'
import * as styles from './Profile-style'
import { MainBtn } from '../../atoms/Button'
import { useDefaultProfileStore } from '../../../store/DefaultProfileStore'
import { GetCommitRecord } from '../../atoms/Github'
import {
  getStoreEmailPart,
  parsePhoneNumber,
  joinEmail,
  createSkillList,
  deleteSkillItem,
} from '../../../utils/profileUtils'
import { moveToTop } from '../../../utils/scrollEvent'

export default function DefaultProfile() {
  const { updateDefaultProfile } = useDefaultProfileStore()
  const storedData = JSON.parse(localStorage.getItem('makere-default-profile'))

  const fileRef = useRef(null)
  const skillListRef = useRef(null)

  /**
   * 저장된 기본 프로필 데이터 불러오는 함수
   * @param {string}  key - 불러올 기본 프로필 key
   * @return {string | number | [string]} 해당 키 값을 가진 기본 프로필 value
   */
  const getStoredData = (key) => {
    if (storedData) {
      return storedData[key]
    } else {
      if (key === 'skills' || key === 'github') {
        return []
      } else {
        return ''
      }
    }
  }

  // 기본 프로필 관련 state
  const [profileImg, setProfileImg] = useState(getStoredData('profileImg')) // 프로필 이미지
  const [name, setName] = useState(getStoredData('name')) // 이름
  const [enName, setEnName] = useState(getStoredData('enName')) // 영문 이름
  const [phoneNumber, setPhoneNumber] = useState(getStoredData('phoneNumber')) // 전화번호
  const [blog, setBlog] = useState(getStoredData('blog')) // 기술 블로그 링크
  const [fullEmail, setFullEmail] = useState(getStoredData('fullEmail')) // 이메일
  const [careerLength, setCareerLength] = useState(
    storedData ? storedData['careerLength'] : '신입'
  ) // 경력
  const [skills, setSkills] = useState(getStoredData('skills')) // 기술 스택
  const [github, setGithub] = useState(getStoredData('github')) // Github

  // 이메일 관련 state
  const [emailId, setEmailId] = useState(getStoreEmailPart(0, fullEmail))
  const [emailDomain, setEmailDomain] = useState(
    getStoreEmailPart(1, fullEmail)
  )

  useEffect(() => {
    const email = joinEmail(emailId, emailDomain)
    setFullEmail(email)
  }, [emailId, emailDomain])

  /**
   * 로컬 스토리지에 정보 저장하는 함수, 저장할 정보를 val 객체안에 삽입
   */
  const saveLocalStorage = () => {
    const val = {
      profileImg,
      name,
      enName,
      phoneNumber,
      blog,
      fullEmail,
      careerLength,
      skills,
      github,
    }

    if (!name.trim()) {
      alert('이름을 입력하세요.')
    } else {
      localStorage.setItem('makere-default-profile', JSON.stringify(val))
      alert('프로필이 저장되었습니다.')
    }
  }

  return (
    <>
      <Layout>
        <styles.Section>
          <styles.TitleCont>
            <WriteTitle
              title="기본 프로필"
              description="서비스에서 사용될 기본 프로필 정보를 작성해 주세요."
            />
            <MainBtn type="save" onClick={saveLocalStorage}>
              프로필 저장하기
            </MainBtn>
          </styles.TitleCont>
          <styles.ProfileCont>
            <styles.ImgCont>
              <styles.ImgLabel
                ref={fileRef}
                htmlFor="profile-upload"
                className="profileImg"
              >
                <styles.ImgWrap>
                  <styles.Img
                    src={profileImg ? profileImg : LicatFace}
                    alt={`${name || enName || '익명'} 님의 프로필 이미지`}
                  />
                  {profileImg ? (
                    <ImgBtn
                      type="delete"
                      onClick={() => {
                        setProfileImg('')
                      }}
                    />
                  ) : (
                    <ImgBtn
                      type="add"
                      onClick={() => {
                        fileRef.current.click()
                      }}
                    />
                  )}
                </styles.ImgWrap>
              </styles.ImgLabel>
              <input
                className="profileInput"
                type="file"
                accept="image/*"
                id="profile-upload"
                onChange={(e) => uploadImg(e, profileImg, setProfileImg)}
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
                    updateDefaultProfile(e)
                    setName(e.target.value)
                  }}
                >
                  이름
                </DefaultInput>
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
                  }}
                />
                <DropBox
                  type="email"
                  width="131"
                  list={domainList}
                  emailDomain={emailDomain}
                  setDomain={setEmailDomain}
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
              </styles.InputCont>
              <styles.Label>경력</styles.Label>
              <DropBox
                width="179"
                type="career"
                careerLength={careerLength}
                setCareerLength={setCareerLength}
                list={careerList}
              />
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
              createSkillList(skillListRef, skills, setSkills)
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
            {skills.map((skill, idx) => (
              <SkillList
                key={idx}
                type="delete"
                onClick={() => deleteSkillItem(idx, skills, setSkills)}
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
      </Layout>
      <MainBtn
        type="profile"
        onClick={() => {
          saveLocalStorage()
          moveToTop()
        }}
      >
        저장하기
      </MainBtn>
    </>
  )
}
