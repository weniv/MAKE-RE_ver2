import { styled } from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 52px;
`

export const ProfileCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 46px;
`

export const ImgCont = styled.div`
  position: relative;
  width: 146px;
  height: 146px;

  .profileInput {
    display: none;
  }
`

export const ImgLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 200px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.grayLv2};
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.defaultImg {
    background: ${(props) => props.theme.grayLv1};
  }
`

export const InputCont = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: flex-end;

  span {
    color: ${(props) => props.theme.surface};
    margin: 0 8px 13px 0;
  }
`

export const Label = styled.label`
  color: ${(props) => props.theme.surface};

  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

export const Line = styled.div`
  width: 890px;
  height: 2px;
  background-color: ${(props) => props.theme.grayLv1};
  margin: 40px 0 0;
`

export const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: bottom;
`

export const SkillListWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`
