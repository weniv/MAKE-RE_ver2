import { styled } from 'styled-components'
import { Layout, Education as Item } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'

export default function Education() {
  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="교육"
            description="대략 본인의 교육을 입력해달라는 내용의 문구"
          />
          <MainBtn>교육 추가하기</MainBtn>
        </Header>
        <Item kind="교육" />
        <Item kind="교육" />
        <Item kind="교육" />
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  padding: 0 52px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
