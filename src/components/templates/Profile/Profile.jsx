import { useState, useContext } from 'react'
import axios from 'axios'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import MainBtn from '../../atoms/Button/MainBtn'
import { ResumeContext } from '../../../context/ResumeContext'
import { SkillList } from '../../atoms/SkillList'
import AddImgIcon from '../../../assets/img-icon.svg'
import DeleteImgIcon from '../../../assets/img-trash-icon.svg'
import LicatFace from '../../../assets/icon-liacat.svg'
import * as styles from './Profile-style'

export default function Profile() {
  const { resumeData } = useContext(ResumeContext)
  const [profileData, setProfileData] = useState(resumeData['profile'][0])

  const previousData = null
  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    previousData ? previousData : '직접 입력'
  )

  // 엔터키 클릭 시, 기술 스택 추가
  const createSkillList = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      const newSkill = e.target.value
      setProfileData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill],
      }))
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

  // 프로필 내용 업데이트
  const updateProfile = (e, name) => {
    setProfileData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }))
  }

  // 프로필 이미지 추가
  const handleImageChange = async (e) => {
    const formData = new FormData()
    const imageFile = e.target.files[0]
    formData.append('image', imageFile)

    try {
      const response = await axios.post(
        'https://api.mandarin.weniv.co.kr/image/uploadfile',
        formData
      )
      await console.log(response)

      const imageUrl =
        'https://api.mandarin.weniv.co.kr/' + response.data.filename

      setProfileData({ ...resumeData, profileImg: imageUrl })
    } catch (error) {
      console.log('프로필 이미지 변경에 실패했습니다.')
      console.error(error)
    }
  }

  // 프로필 이미지 삭제
  function handleDeleteImg(e) {
    e.preventDefault()
    setProfileData({ ...resumeData, profileImg: '' })
  }

  return (
    <Layout>
      <styles.Section>
        <WriteTitle
          title="프로필"
          description="대략 본인의 프로필 정보를 입력해달라는 내용의 문구"
        />
        <styles.ProfileCont>
          <styles.ProfileImgCont>
            <label htmlFor="profile-upload" className="profileImg">
              {profileData.profileImg ? (
                <div>
                  <img
                    src={profileData.profileImg}
                    alt={`${
                      profileData.name || profileData.enName || '익명'
                    } 님의 프로필 이미지`}
                  />
                  <button
                    className="deleteImgBtn"
                    onClick={handleDeleteImg}
                    type="button"
                  >
                    <img src={DeleteImgIcon} alt="프로필 이미지 삭제" />
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    src={LicatFace}
                    alt="프로필 기본 이미지"
                    className="defaultImg"
                  />
                  <img
                    src={AddImgIcon}
                    alt="프로필 사진 업로드하기"
                    className="addImgBtn"
                  />
                </div>
              )}
            </label>
            <input
              className="profileInput"
              type="file"
              accept="image/*"
              id="profile-upload"
              onChange={handleImageChange}
            />
          </styles.ProfileImgCont>

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
                  updateProfile(e, 'name')
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
                  updateProfile(e, 'enName')
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
                  updateProfile(e, 'phoneNumber')
                }}
              >
                전화번호
              </DefaultInput>
            </styles.InputCont>
            <styles.InputCont>
              <DefaultInput
                // id={id}
                type="text"
                placeholder="예) paul-lab"
                width="220px"
                marginRight="12px"
                // value={inputData}
                // onChange={(e) => {
                //   setInputData(e.target.value)
                // }}
              >
                이메일
              </DefaultInput>
              <span>@</span>
              <DefaultInput
                // id={id}
                type="text"
                placeholder="예) paul-lab"
                width="200px"
                marginRight="8px"
                // value={inputData}
                // onChange={(e) => {
                //   setInputData(e.target.value)
                // }}
              />
              <DropBox
                width="131"
                list={['naver.com', 'daum.net', 'gmail.com']}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
              />
            </styles.InputCont>
            <styles.InputCont>
              <DefaultInput
                id="blog"
                type="url"
                onChange={(e) => updateProfile(e, 'blog')}
                inputData={profileData.blog}
              >
                기술 블로그 링크
              </DefaultInput>
            </styles.InputCont>
            <styles.Label>경력</styles.Label>
            <DropBox
              width="179"
              list={[
                '신입',
                '1년',
                '2년',
                '3년',
                '4년',
                '5년',
                '6년',
                '7년',
                '8년',
                '9년',
                '10년',
              ]}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
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
        <styles.GitHubCont>
          <DefaultInput
            id="github"
            type="text"
            width="260px"
            onChange={(e) => updateProfile(e, 'github')}
            inputData={profileData.github}
          >
            GitHub ID
          </DefaultInput>
          <MainBtn type="preview">내 잔디 불러오기</MainBtn>
        </styles.GitHubCont>

        <styles.Label>Contributions</styles.Label>
        <styles.CommitBox />
      </styles.Section>
    </Layout>
  )
}
