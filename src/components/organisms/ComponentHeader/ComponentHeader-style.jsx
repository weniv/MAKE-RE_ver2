import { styled } from 'styled-components'

export const Cont = styled.div`
  width: 786px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.grayLv2};
`

export const Header = styled.div`
  color: ${(props) => props.theme.surface};
  position: relative;
  display: flex;
  align-items: center;
  padding: 18px 24px;
`

export const Component = styled.div`
  margin: 22px 24px 0 24px;
  padding-bottom: 32px;
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  width: ${(width) => width || '32px'};
  height: ${(height) => height || '32px'};
  padding: 6px 0;
  border-radius: 10px;
`

export const ExpandBtn = styled(Btn)`
  position: absolute;
  right: 60px;
  padding: 6px 6px;
`

export const DelBtn = styled(Btn)`
  position: absolute;
  right: 20px;
  padding: 6px 6px;

  &:hover {
    background-color: ${(props) => props.theme.grayLv1};
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
