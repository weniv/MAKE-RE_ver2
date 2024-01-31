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
import { GetCommitRecord } from '../../atoms/Github'
import {
  parsePhoneNumber,
  getStoreEmailPart,
  joinEmail,
  createSkillList,
  deleteSkillItem,
  useDataEffect,
} from '../../../utils/profileUtils'

export default function Profile({ id }) {
  const storedResumeData = JSON.parse(
    localStorage.getItem('makere-resume-list')
  )
  const selectedResume = storedResumeData?.state.resumeList.find(
    (el) => el.id === Number(id)
  )
  const storedDefaultData = JSON.parse(
    localStorage.getItem('makere-default-profile')
  )

  const profileRef = useRef(null)
  const skillListRef = useRef(null)

  /**
   * 기본 프로필 정보를 가져오는 함수
   * @param {string}  key - 프로필 객체 내부의 key 값
   * @return {string} 해당 key에 해당하는 기본 프로필 혹은 커스텀 value 값
   */
  const getDefaultData = (key) => {
    const profileData = selectedResume ? selectedResume.content.profile : ''

    if (storedDefaultData && !profileData['name']) {
      return storedDefaultData[key]
    } else {
      return profileData[key]
    }
  }

  /**
   * 기본 프로필 정보를 가져오는 함수 (데이터가 배열 형식인 경우)
   * @param {string}  key - 프로필 객체 내부의 key 값
   * @return {[string]} 해당 key에 해당하는 기본 프로필 혹은 커스텀 value 값
   */
  const getDefaultArrayData = (key) => {
    const profileData = selectedResume ? selectedResume.content.profile : []
    if (storedDefaultData && profileData[key].length === 0) {
      return storedDefaultData[key]
    } else {
      return profileData[key]
    }
  }

  const [profileImg, setProfileImg] = useState(getDefaultData('profileImg'))
  const [name, setName] = useState(getDefaultData('name'))
  const [enName, setEnName] = useState(getDefaultData('enName'))
  const [phoneNumber, setPhonNumber] = useState(getDefaultData('phoneNumber'))
  const [blog, setBlog] = useState(getDefaultData('blog'))
  const [fullEmail, setFullEmail] = useState(getDefaultData('fullEmail'))
  const [skills, setSkills] = useState(getDefaultArrayData('skills'))
  const [github, setGithub] = useState(getDefaultData('github'))
  const [careerLength, setCareerLength] = useState(
    getDefaultData('careerLength') ? getDefaultData('careerLength') : '신입'
  )

  // 이메일 관련 state
  const [emailId, setEmailId] = useState(getStoreEmailPart(0, fullEmail))
  const [emailDomain, setEmailDomain] = useState(
    getStoreEmailPart(1, fullEmail)
  )

  // 이메일 id와 domain을 조합하여 full-email을 만들어줌
  useEffect(() => {
    const email = joinEmail(emailId, emailDomain)
    setFullEmail(email)
  }, [emailId, emailDomain])

  useDataEffect(id, 'profileImg', profileImg)
  useDataEffect(id, 'name', name)
  useDataEffect(id, 'enName', enName)
  useDataEffect(id, 'phoneNumber', phoneNumber)
  useDataEffect(id, 'skills', skills)
  useDataEffect(id, 'blog', blog)
  useDataEffect(id, 'fullEmail', fullEmail)
  useDataEffect(id, 'github', github)
  useDataEffect(id, 'careerLength', careerLength)

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
                        profileRef.current.click()
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
                  type="url"
                  onChange={(e) => {
                    setBlog(e.target.value)
                  }}
                  inputData={blog}
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
            {skills &&
              skills.map((skill, i) => (
                <SkillList
                  key={i}
                  type="delete"
                  onClick={() => deleteSkillItem(i, skills, setSkills)}
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
