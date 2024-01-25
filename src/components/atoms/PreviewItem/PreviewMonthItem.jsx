import React from 'react'
import styled, { css } from 'styled-components'

// NOTE: 종료일이 없는 자격증 항목일 때만 type props 전달
export default function PreviewMonthItem({
  type,
  title,
  date,
  startDate,
  endDate,
  isInvalid,
  color,
  size,
}) {
  return (
    <Item size={size} type={type}>
      <DateWrap
        type={type}
        isInvalid={isInvalid}
        startDate={startDate}
        endDate={endDate}
        color={color}
      >
        <FullDate type={type}>
          {type === 'certificate' ? (
            <span>{date}</span>
          ) : isInvalid ? (
            <span>-</span>
          ) : (
            <>
              <span>{startDate || '-'}</span>
              <span className="fit-span"> ~ </span>
              <span className="end">{endDate || '-'}</span>
            </>
          )}
        </FullDate>
      </DateWrap>
      <p>{title}</p>
    </Item>
  )
}

PreviewMonthItem.defaultProps = {
  date: '-',
  startDate: '',
  endDate: '',
  content: '-',
}

const Item = styled.span`
  min-width: 140px;
  display: flex;
  align-items: center;
  // gap: 20px;
  color: #47494d !important;
  font-size: ${(props) => props.size || '14px'};
  margin: ${(props) => (props.type === 'career' ? 0 : '10px auto')};
  line-height: 22px;
`

const DateWrap = styled.p`
  width: 140px;
  min-width: fit-content;
  color: var(--gray-lv3-color);
  font-weight: 700;

  text-align: ${(props) => !props.startDate && props.endDate && 'right'};
  padding-right: ${(props) => !props.startDate && props.endDate && '7px'};
  white-space: pre-wrap;
`

const FullDate = styled.div`
  /* type이 project가 아닐 때, */
  ${(props) =>
    props.type !== 'project' &&
    css`
      display: flex;
      gap: 0.6rem;
      text-align: center;

      span {
        width: 6.5rem;
      }
      .fit-span {
        width: fit-content;
      }
      ${(props) =>
        props.type == 'career' &&
        css`
          gap: 0.4rem;
          span {
            width: fit-content;
          }
        `}
    `}
`
