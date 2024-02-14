import { styled } from 'styled-components'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import TriangleDown from '../../../assets/icon-triangle-down.svg'

export const DropBoxCont = styled.div`
  width: ${(props) => props.width}px;
`

export const DropBtn = styled.button`
  width: ${(props) => props.width}px;
  color: var(--surface-color);
  line-height: 20px;
  display: inline-flex;
  height: 42px;
  padding: 11px 10px 11px 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--background-color);

  &:focus {
    outline: 2px solid var(--primary-color);
  }

  // &.open::after {
  //   content: '';
  //   width:
  //   background-color: salmon;
  // }
`

export const ListBox = styled.ul`
  width: ${(props) => props.width}px;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 8px;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--background-color);
`

export const List = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--surface-color);

  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 5px;
  border-radius: 8px;

  &:hover {
    background-color: var(--gray-lv1-color);
  }
`
