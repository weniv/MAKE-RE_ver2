import { styled } from 'styled-components'
import AddImgIcon from '../../../assets/img-icon.svg'
import DeleteImgIcon from '../../../assets/img-trash-icon.svg'

// 프로필 이미지가 없는 경우: type='add'를 props로 내려주어 업로드 아이콘 표시
// 프로필 이미지가 있는 경우: type='delete'를 props로 내려주어 삭제 아이콘 표시
export default function ImageBtn({ type, onClick }) {
  return (
    <ImageButton onClick={onClick}>
      <img
        src={type === 'add' ? AddImgIcon : DeleteImgIcon}
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
