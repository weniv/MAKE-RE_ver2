import React from 'react'
import styled, { css } from 'styled-components'

// NOTE: 종료일이 없는 자격증 항목일 때만 type props 전달
export default function PreviewMonthItem({
  type,
  title,
  startDate,
  endDate,
  inProgress,
  isInvalid,
  color,
  size,
}) {
  function formatDate(date) {
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

  return (
    <Item>
      <DateWrap
        type={type}
        isInvalid={isInvalid}
        startDate={startDate}
        endDate={endDate}
        color={color}
      >
        {(startDate && endDate) || (startDate && inProgress) ? (
          <>
            <span>{formatDate(startDate) || '-'}</span>
            <span className="fit-span"> ~ </span>
            {inProgress ? (
              <span className="end">진행 중</span>
            ) : (
              <span className="end">{formatDate(endDate)}</span>
            )}
          </>
        ) : (
          <span>{formatDate(startDate)}</span>
        )}
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

const Item = styled.p`
  width: 14rem;
  height: fit-content;
  color: #47494d;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

const DateWrap = styled.span`
  white-space: pre-wrap;
`
