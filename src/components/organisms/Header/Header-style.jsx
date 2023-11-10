import { styled } from 'styled-components'

export const HeaderCont = styled.header`
  width: 100vw;
  background-color: ${(props) =>
    props.isWhite ? 'var(--background-color)' : 'var(--gray-lv1-color)'};
  border-bottom: ${(props) =>
    props.isWhite ? '1px solid var(--gray-lv2-color)' : 'none'};
`

export const HeaderLayout = styled.div`
  max-width: 1190px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => (props.isCenter ? 'center' : 'space-between')};
  align-items: center;
`

export const BtnCont = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileBtn = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--background-color);
  border: ${(props) =>
    props.isMenuOpen
      ? '2px solid var(--primary-color)'
      : '1px solid var(--gray-lv2-color)'};
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const MenuList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 50%;
  transform: translateX(50%);
  width: 150px;
  background-color: var(--background-color);
  padding: 9px 8px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
  border: 1px solid var(--gray-lv2-color);
  z-index: 100000;
`

export const MenuItem = styled.li`
  border-radius: 8px;
  transition: background-color 0.1s ease-in;

    a,
    button {
      color: var(--surface-color);
      font-size: 14px;
      display: inline-block;
      width: 100%;
      text-align: left;
      line-height: 20px;
      padding: 5px 10px;
      border-radius: 8px;
    }

    &:hover {
      background-color: var(--gray-lv1-color);
    }
  }
`
