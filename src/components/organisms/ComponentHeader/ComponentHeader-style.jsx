import { styled } from 'styled-components'
import expandIcon from '../../../assets/icon-triangle-down.svg'
import reduceIcon from '../../../assets/icon-Triangle-Up.svg'

export const Cont = styled.div`
  width: 786px;
  border-radius: 16px;
  background-color: var(--bg-color);
`

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 18px 24px;
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  width: ${(width) => width || '32px'};
  height: ${(height) => height || '32px'};
  padding: 6px;
  border-radius: 10px;
`

export const ExpandBtn = styled(Btn)`
  position: absolute;
  right: 60px;
`

export const DelBtn = styled(Btn)`
  position: absolute;
  right: 20px;

  &:hover {
    background-color: var(--hover-color);
  }
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
`

export const Img = styled.img`
  width: 20px;
  height: 20px;
`

export const expandImg = styled(Img)`
  background-image: ${({ isExpand }) =>
    !isExpand ? `url(${expandIcon})` : `url(${reduceIcon})`};
`

export const Contents = styled.div``
