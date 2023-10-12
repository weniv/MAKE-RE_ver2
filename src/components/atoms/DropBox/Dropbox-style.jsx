import { styled } from 'styled-components'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import TriangleDown from '../../../assets/icon-triangle-down.svg'

export const DropBoxCont = styled.div`
  width: ${(props) => props.width}px;
`

export const DropBtn = styled.button`
  width: ${(props) => props.width}px;
  color: ${(props) => props.theme.surface};
  line-height: 20px;
  display: inline-flex;
  height: 42px;
  padding: 11px 10px 11px 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.grayLv2};
  background-color: ${(props) => props.theme.background};

  &:focus {
    outline: 2px solid ${(props) => props.theme.primary};
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
  border: 1px solid ${(props) => props.theme.grayLv2};
  background-color: ${(props) => props.theme.background};
`

export const List = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.surface};

  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 5px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.grayLv1};
  }
`
