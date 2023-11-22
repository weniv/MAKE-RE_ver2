import React from 'react'
import styled, { css } from 'styled-components'
import ExplainBtn from '../../atoms/Button/ExplainBtn'
import ExpalinBox from './ExpalinBox'

export default function Explain({ mode, setMode }) {
  return (
    <ExplainContainer mode={mode}>
      <ExplainBtn mode={mode} setMode={setMode} />

      {mode && (
        <div>
          <ExpalinBox dir="top">라이트모드/다크모드 설정 토글</ExpalinBox>
          <ExpalinBox dir="right">
            클릭 시 해당 섹션 작성 가능
            <span className="explain">프로필 섹션은 최상단 고정입니다.</span>
          </ExpalinBox>
          <ExpalinBox dir="bottom">
            드래그 앤 드롭으로 섹션 순서 변경
            <span className="explain">
              미리보기 시 변경된 순서가 반영됩니다."
            </span>
          </ExpalinBox>
          <ExpalinBox dir="left">PDF 출력 화면 미리보기</ExpalinBox>
        </div>
      )}
    </ExplainContainer>
  )
}

const ExplainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 10rem;
  ${(props) =>
    props.mode &&
    css`
      z-index: 10000;
    `}
`
