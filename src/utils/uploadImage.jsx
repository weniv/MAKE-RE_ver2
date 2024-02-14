import axios from 'axios'

export default async function uploadImage(e, data, setData) {
  const formData = new FormData()
  const imageFile = e.target.files[0]
  formData.append('image', imageFile)

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/image/uploadfile',
      formData
    )
    await console.log(response)

    const imageUrl =
      'https://api.mandarin.weniv.co.kr/' + response.data.filename

    setData(imageUrl)
    // setData({ ...data, profileImg: imageUrl })
  } catch (error) {
    console.log('프로필 이미지 변경에 실패했습니다.')
    console.error(error)
  }
}
