import styled from 'styled-components'

export default function SaveBtn({ onClick, children }) {
  return <SaveButton onClick={onClick}>{children}</SaveButton>
}

const SaveButton = styled.button`
  width: 80px;
  padding: 13px 0;
  border-radius: 10px;
  color: ${(props) => props.theme.surface};
  line-height: 16px;
  background-color: inherit;
  &:hover {
    background: var(--hover-color);
    background-color: ${(props) => props.theme.grayLv1};
  }
`
