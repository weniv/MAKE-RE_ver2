import { useState, useContext } from 'react'
import { styled } from 'styled-components'
import { WriteSubtitle, WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import LicatFace from '../../../assets/icon-liacat.svg'
import DefaultInput, { Input } from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import MainBtn from '../../atoms/Button/MainBtn'
import { ResumeContext } from '../../../context/ResumeContext'
import { SkillList } from '../../atoms/SkillList'

export default function Profile() {
  const { resumeData } = useContext(ResumeContext)
  const [profileData, setProfileData] = useState(resumeData['profile'][0])

  const previousData = null
  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    previousData ? previousData : '직접 입력'
  )

  // 기술 스택 추가
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

  return (
    <Layout>
      <Section>
        <WriteTitle
          title="프로필"
          description="대략 본인의 프로필 정보를 입력해달라는 내용의 문구"
        />
        <ProfileCont>
          <button className="profileImg">
            {true ? (
              <span className="ir">프로필 이미지 업로드</span>
            ) : (
              <span className="ir">프로필 이미지 변경</span>
            )}
          </button>
          <div>
            <InputCont>
              <DefaultInput
                // id={id}
                type="text"
                placeholder="예) 홍길동"
                width="220px"
                marginRight="12px"
                // value={inputData}
                // onChange={(e) => {
                //   setInputData(e.target.value)
                // }}
              >
                이름
              </DefaultInput>
              <DefaultInput
                // id={id}
                type="text"
                placeholder="예) Kildong Hong"
                width="356px"
                // value={inputData}
                // onChange={(e) => {
                //   setInputData(e.target.value)
                // }}
              >
                영문 이름
              </DefaultInput>
            </InputCont>{' '}
            <InputCont>
              <DefaultInput
                // id={id}
                type="text"
                placeholder="예) 010-1234-5678"
                width="220px"
                marginRight="12px"
                // value={inputData}
                // onChange={(e) => {
                //   setInputData(e.target.value)
                // }}
              >
                전화번호
              </DefaultInput>
            </InputCont>
            <InputCont>
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
            </InputCont>
            <InputCont>
              <DefaultInput type="url">기술 블로그 링크</DefaultInput>
            </InputCont>
            <Label>경력</Label>
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
        </ProfileCont>
      </Section>
      <Line />
      <Section>
        <WriteSubtitle subtitle="기술 스택" />
        <Input
          onKeyDown={createSkillList}
          type="text"
          placeholder="예) Python"
          width="260px"
        />
        <SkillListWrap>
          {profileData.skills.map((skill, i) => (
            <SkillList
              key={i}
              type="delete"
              onClick={(e) => deleteSkillItem(e, i)}
            >
              {skill}
            </SkillList>
          ))}
        </SkillListWrap>
      </Section>
      <Line />
      <Section>
        <WriteSubtitle subtitle="GitHub" />
        <GitHubCont>
          <DefaultInput
            // id={id}
            type="text"
            width="260px"
            // value={inputData}
            // onChange={(e) => {
            //   setInputData(e.target.value)
            // }}
          >
            GitHub ID
          </DefaultInput>
          <MainBtn type="preview">내 잔디 불러오기</MainBtn>
        </GitHubCont>

        <Label>Contributions</Label>
        <CommitBox />
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 52px;
`

const ProfileCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 52px;

  button.profileImg {
    width: 146px;
    height: 146px;
    border-radius: 200px;
    border: 1px solid var(--border-color);
    background: var(--hover-color);
    background-image: url(${LicatFace});
  }
`

const InputCont = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: flex-end;

  span {
    margin: 0 8px 13px 0;
  }
`

const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

const Line = styled.div`
  width: 890px;
  height: 2px;
  background: var(--hover-color);
  margin: 40px 0 0;
`

const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: bottom;
`

const SkillListWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const GitHubCont = styled(FlexBox)`
  margin-bottom: 20px;

  button {
    align-self: flex-end;
  }
`
const CommitBox = styled.div`
  height: 160px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--hover-color);
`
