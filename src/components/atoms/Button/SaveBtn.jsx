import styled from 'styled-components'

export default function SaveBtn({ onClick, children }) {
  return <SaveButton onClick={onClick}>{children}</SaveButton>
}

const SaveButton = styled.button`
  width: 80px;
  padding: 13px 0;
  border-radius: 10px;
  color: #000;
  line-height: 16px;
  background-color: inherit;
  &:hover {
    background: var(--hover-color);
  }
`
