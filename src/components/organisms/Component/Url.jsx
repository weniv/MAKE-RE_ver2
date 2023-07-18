import React, { useState } from 'react'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import DefaultInput from '../../atoms/Input/DefaultInput'
import { styled } from 'styled-components'

export default function Url({ id, data }) {
  const [name, setName] = useState(data.name)
  const [link, setLink] = useState(data.link)
  console.log('추가>', id)
  return (
    <UrlItem>
      <ComponentHeader kind="URL" title={name}>
        <DefaultInput
          width="100%"
          marginRight="0px"
          id={`name-${id}`}
          type="text"
          placeholder="예) 포트폴리오 노션 페이지"
          inputData={name}
          setInputData={setName}
        >
          URL 이름 또는 설명
        </DefaultInput>
        <DefaultInput
          width="100%"
          marginRight="0px"
          id={`link-${id}`}
          type="text"
          placeholder="예) www.paullab.co.kr"
          inputData={link}
          setInputData={setLink}
        >
          링크
        </DefaultInput>
      </ComponentHeader>
    </UrlItem>
  )
}
Url.defaultProps = {
  id: 0,
  data: { name: '', link: '' },
}

const UrlItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
