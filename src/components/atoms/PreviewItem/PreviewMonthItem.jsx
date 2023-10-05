import React from 'react'
import styled from 'styled-components'

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
        {isInvalid
          ? '-'
          : type === 'certificate'
          ? date
          : `${startDate} ~ ${endDate}`}
      </DateWrap>
      <p>{title}</p>
    </Item>
  )
}

PreviewMonthItem.defaultProps = {
  date: '-',
  startDate: '-',
  endDate: '-',
  content: '-',
}

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: ${(props) => props.size || '14px'};
  margin: ${(props) => (props.type === 'career' ? 0 : '10px auto')};
`

const DateWrap = styled.p`
  width: 140px;
  color: ${(props) => props.color || '#bdbdbd'};
  font-weight: 700;
  text-align: ${(props) => props.isInvalid && 'center'};
  text-align: ${(props) => !props.startDate && props.endDate && 'right'};
  padding-right: ${(props) => !props.startDate && props.endDate && '7px'};
`
