import { styled } from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 52px;
`

export const ProfileCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 52px;
`

export const ProfileImgCont = styled.div`
  position: relative;
  width: 146px;
  height: 146px;
  flex-grow: 0;

  .profileImg {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;

    div {
      width: 100%;
      height: 100%;
      border-radius: 200px;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    img.defaultImg {
      background: var(--hover-color);
    }
  }

  .profileImg .addImgBtn,
  .profileImg .deleteImgBtn {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 46px;
    height: 46px;
  }

  .profileInput {
    display: none;
  }
`

export const InputCont = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: flex-end;

  span {
    margin: 0 8px 13px 0;
  }
`

export const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

export const Line = styled.div`
  width: 890px;
  height: 2px;
  background: var(--hover-color);
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

export const GitHubCont = styled(FlexBox)`
  margin-bottom: 20px;

  button {
    align-self: flex-end;
  }
`
export const CommitBox = styled.div`
  height: 160px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--hover-color);
`
