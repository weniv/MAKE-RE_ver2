import { styled } from 'styled-components'
import { Layout, Certificate as Item } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'

export default function Certificate() {
  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="자격증"
            description="대략 본인의 자격증을 입력해달라는 내용의 문구"
          />
          <MainBtn>자격증 추가하기</MainBtn>
        </Header>
        <Item kind="자격증" />
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
