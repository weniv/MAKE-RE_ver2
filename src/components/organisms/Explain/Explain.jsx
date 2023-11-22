import React from 'react'
import styled, { css } from 'styled-components'
import ExplainBtn from '../../atoms/Button/ExplainBtn'
import ExpalinBox from './ExpalinBox'

export default function Explain({ mode, setMode }) {
  return (
    <>
      <ExplainBtn mode={mode} setMode={setMode} />

      <ExplainContainer mode={mode}>
        {mode && (
          <div>
            <ExpalinBox dir="top" pos={Position.light}>
              라이트모드/다크모드 설정 토글
            </ExpalinBox>
            <ExpalinBox dir="right" pos={Position.move}>
              클릭 시 해당 섹션 작성 가능
              <span>프로필 섹션은 최상단 고정입니다.</span>
            </ExpalinBox>
            <ExpalinBox dir="top" pos={Position.drag}>
              드래그 앤 드롭으로 섹션 순서 변경
              <span>미리보기 시 변경된 순서가 반영됩니다."</span>
            </ExpalinBox>
            <ExpalinBox dir="top" pos={Position.pdf}>
              PDF 출력 화면 미리보기
            </ExpalinBox>
          </div>
        )}
      </ExplainContainer>
    </>
  )
}

const Position = {
  light: `top: 7.5rem;
    right:0;
    transform: translateX(39%);`,
  move: ` 
    inset: 0;
    top: 13.2rem;
    left:54%;`,
  drag: `
    inset: 0;
    top: 48.5rem;
    left:83.8%;`,
  pdf: `
    inset: 0;
    top: 71rem;
    left:83.5%;`,
}

const ExplainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 119rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10rem;
  z-index: ${(props) => (props.mode ? 2000 : -1)};
`
