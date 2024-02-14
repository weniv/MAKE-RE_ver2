import { useContext } from 'react'
import { styled } from 'styled-components'
import ThemeContext from '../../../context/ThemeContext'
import AddImgIcon from '../../../assets/img-icon.svg'
import AddImgIconDark from '../../../assets/img-icon-dark.svg'
import DeleteImgIcon from '../../../assets/img-trash-icon.svg'
import DeleteImgIconDark from '../../../assets/img-trash-icon-dark.svg'

// 프로필 이미지가 없는 경우: type='add'를 props로 내려주어 업로드 아이콘 표시
// 프로필 이미지가 있는 경우: type='delete'를 props로 내려주어 삭제 아이콘 표시
export default function ImageBtn({ type, onClick }) {
  const { themeMode } = useContext(ThemeContext)
  const imgIcon = themeMode === 'light' ? AddImgIcon : AddImgIconDark
  const deleteIcon = themeMode === 'light' ? DeleteImgIcon : DeleteImgIconDark

  return (
    <ImageButton onClick={onClick}>
      <img
        src={type === 'add' ? imgIcon : deleteIcon}
        alt={type === 'add' ? '프로필 이미지 추가' : '프로필 이미지 삭제'}
      />
    </ImageButton>
  )
}

const ImageButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 46px;
  height: 46px;
`
