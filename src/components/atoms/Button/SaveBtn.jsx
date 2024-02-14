import styled from 'styled-components'

export default function SaveBtn({ onClick, children, form }) {
  return (
    <SaveButton onClick={onClick} form={form}>
      {children}
    </SaveButton>
  )
}

const SaveButton = styled.button`
  width: 80px;
  padding: 13px 0;
  border-radius: 10px;
  color: var(--surface-color);
  line-height: 16px;
  background-color: inherit;
  &:hover {
    background: var(--gray-lv1-color);
    background-color: var(--gray-lv1-color);
  }
`
