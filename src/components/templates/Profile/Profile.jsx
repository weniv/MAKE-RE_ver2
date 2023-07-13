import { useState } from 'react'
import { styled } from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import Layout from '../../organisms/Component/Layout'
import LicatFace from '../../../assets/icon-liacat.svg'
import DefaultInput from '../../atoms/Input/DefaultInput'
import DropBox from '../../atoms/DropBox/DropBox'
import { Label } from '../../atoms/Input/DefaultInput'

export default function Profile() {
  const previousData = null
  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    previousData ? previousData : '직접 입력'
  )

  return (
    <Layout>
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
          <CareerLabel>경력</CareerLabel>
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
      <Line />
    </Layout>
  )
}

const ProfileCont = styled.div`
  margin-top: 52px;
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

const CareerLabel = styled(Label)`
  margin-bttom: 8px;
`

const Line = styled.div`
  width: 890px;
  height: 2px;
  background: var(--hover-color);
  margin: 40px 0 32px;
`
