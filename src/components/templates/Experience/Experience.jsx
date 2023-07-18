import React from 'react'
import { ExpItem, Layout } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { styled } from 'styled-components'

export default function Experience() {
  return (
    <Layout>
      <Section>
        <WriteTitle
          title="경험"
          description="대략 본인의 경험을 입력해달라는 내용의 문구"
        />
        <ItemList>
          <ExpItem />
          <ExpItem />
          <ExpItem />
        </ItemList>
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  padding: 0 52px;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
