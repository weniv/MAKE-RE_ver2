export default function handleDeleteImg(e, data, setData) {
  e.preventDefault()
  console.log('삭제 버튼 눌렸음')
  setData('')
  // setData({ ...data, profileImg: '' })
}
