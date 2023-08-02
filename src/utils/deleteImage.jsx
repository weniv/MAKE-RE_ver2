export default function handleDeleteImg(e, data, setData) {
  e.preventDefault()
  setData({ ...data, profileImg: '' })
}
