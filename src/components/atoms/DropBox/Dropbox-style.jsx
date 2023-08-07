import { styled } from 'styled-components'

export const DropBoxCont = styled.div`
  width: ${(props) => props.width}px;
`

export const DropBtn = styled.button`
  width: ${(props) => props.width}px;
  color: var(--font-color);
  line-height: 20px;
  display: inline-flex;
  height: 42px;
  padding: 11px 10px 11px 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);

  &:focus {
    outline: 2px solid var(--main-color);
  }
`

export const ListBox = styled.ul`
  width: ${(props) => props.width}px;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 8px;
  position: absolute;
  z-index: 10;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
`

export const List = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--font-color);
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 5px;
  border-radius: 8px;

  &:hover {
    background-color: var(--hover-color);
  }
`
