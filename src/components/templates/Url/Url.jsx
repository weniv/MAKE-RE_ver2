import React from 'react'
import { styled } from 'styled-components'
import { Layout, UrlItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'

export default function Url() {
  return (
    <Layout>
      <Section>
        <WriteTitle
          title="추가 URL"
          description="대략 본인의 추가 URL을 입력해달라는 내용의 문구"
        />
        <ItemList>
          <UrlItem />
          <UrlItem />
          <UrlItem />
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
