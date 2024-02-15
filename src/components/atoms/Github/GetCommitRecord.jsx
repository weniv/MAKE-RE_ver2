import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../../context/ThemeContext'
import AddImgIcon from '../../../assets/img-icon.svg'
import AddImgIconDark from '../../../assets/img-icon-dark.svg'
import { MainBtn } from '../Button'
import deleteIcon from '../../../assets/icon-X.svg'
import ColorIcon from '../ColorIcon/ColorIcon'

export default function GetCommitRecord({ github, setGithub }) {
  const [isValid, setIsValid] = useState(true)
  const [githubID, setGithubID] = useState(github[0] ? github[0] : null)
  const [commitSrc, setCommitSrc] = useState(github[1] ? github[1] : null)
  const { themeMode } = useContext(ThemeContext)
  const imgIcon = themeMode === 'light' ? AddImgIcon : AddImgIconDark

  /**
   * github id 및 commit url 삭제하는 함수
   */
  const deleteGithubData = () => {
    setGithubID('')
    setCommitSrc('')
    setGithub([])
    setIsValid(true)
  }

  /**
   * github commit url 생성하는 함수
   * @param {string}  id - 사용자의 github 아이디
   */
  const getCommitImage = (id) => {
    if (id) {
      const commitImageSrc = `https://ghchart.rshah.org/2e6ff2/${id}`
      setCommitSrc(commitImageSrc)
      setIsValid(true)

      const val = [id, commitImageSrc]
      setGithub(val)
    }
  }

  /**
   * 아이디가 유효하지 않은 경우, commit 이미지 에러처리
   */
  const handleImageError = () => {
    setGithub([])
    console.error('Failed to load image for GitHub ID:', githubID)
    setIsValid(false)
  }

  return (
    <>
      <GitHubCont>
        <GithubForm
          onSubmit={(e) => {
            e.preventDefault()
            getCommitImage(githubID)
          }}
        >
          <div>
            <label htmlFor="githubId">
              GitHub ID
              {!isValid && (
                <strong className="isInvalidAlert">
                  *유효하지 않은 아이디입니다.
                </strong>
              )}
            </label>
            <input
              id="githubId"
              type="text"
              value={githubID}
              onChange={(e) => {
                setGithubID(e.target.value)
              }}
            />
          </div>
          <MainBtn type="preview">내 잔디 불러오기</MainBtn>
          <DeleteIcon
            onClick={(e) => {
              e.preventDefault()
              deleteGithubData()
            }}
          >
            <ColorIcon type="iconLv2" iconPath={deleteIcon} />
          </DeleteIcon>
        </GithubForm>
      </GitHubCont>

      <Label>Contributions</Label>
      <CommitBox>
        {commitSrc && isValid ? (
          <CommitImg src={commitSrc} onError={handleImageError} />
        ) : (
          <img src={imgIcon} alt="" />
        )}
      </CommitBox>
    </>
  )
}

const Label = styled.label`
  color: var(--gray-lv4-color);
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
`

const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: bottom;
`

const GitHubCont = styled(FlexBox)`
  margin-bottom: 20px;

  button {
    align-self: flex-end;
  }
`

const GithubForm = styled.form`
  display: flex;
  gap: 8px;
  justify-content: flex-start;

  div {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;

    label {
      color: var(--gray-lv4-color);
      font-size: 12px;

      strong.isInvalidAlert {
        color: #f96167;
        margin-left: 10px;
      }
    }

    input {
      width: 260px;
      height: 42px;
      padding: 11px 0 11px;
      padding-left: 16px;
      border-radius: 10px;
    }
  }
`

const DeleteIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid var(--gray-lv2-color);
  border-radius: 10px;
  box-sizing: border-box;
  transition: opacity 0.1s ease-in;

  &:hover {
    background-color: var(--gray-lv1-color);
  }
`

const CommitBox = styled.div`
  height: 160px;
  border-radius: 10px;
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--gray-lv1-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const CommitImg = styled.img`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`
