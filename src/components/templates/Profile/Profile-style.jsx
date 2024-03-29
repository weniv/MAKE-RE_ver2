import { styled } from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 52px;

  form.inputWrap {
    display: flex;
    gap: 8px;
  }
`

export const ProfileCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 46px;
`

export const TitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border: 1px solid var(--gray-lv2-color);
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--gray-lv1-color);
`

export const InputCont = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: flex-end;
  justify-content: space-between;

  span {
    color: var(--surface-color);
    margin: 0 8px 13px 0;
  }
`

export const NameWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  gap: 16px;
`

export const Label = styled.label`
  color: var(--surface-color);

  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

export const Line = styled.div`
  width: 890px;
  height: 2px;
  background-color: var(--gray-lv1-color);
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
