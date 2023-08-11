import React, { useEffect, useState } from 'react'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import DefaultInput from '../../atoms/Input/DefaultInput'
import { styled } from 'styled-components'
import { updateData } from '../../../utils'

export default function Url({ idx, url, urlData, setUrlData, deleteUrl }) {
  return (
    <UrlItem>
      <ComponentHeader
        kind="URL"
        id={url.id}
        title={url.content || null}
        handleDelete={deleteUrl}
      >
        <ItemCont>
          <DefaultInput
            width="100%"
            marginRight="0px"
            id={`url-content-${url.id}`}
            type="text"
            name="content"
            placeholder="예) 포트폴리오 노션 페이지"
            inputData={url.content}
            onChange={(e) => {
              updateData(e, idx, urlData, setUrlData)
            }}
          >
            URL 이름 또는 설명
          </DefaultInput>
          <DefaultInput
            width="100%"
            marginRight="0px"
            id={`url-link-${url.id}`}
            type="text"
            name="link"
            placeholder="예) www.paullab.co.kr"
            inputData={url.link}
            onChange={(e) => {
              updateData(e, idx, urlData, setUrlData)
            }}
          >
            링크
          </DefaultInput>
        </ItemCont>
      </ComponentHeader>
    </UrlItem>
  )
}
Url.defaultProps = {
  id: 0,
  data: { name: '', link: '' },
}

const UrlItem = styled.li``

const ItemCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
