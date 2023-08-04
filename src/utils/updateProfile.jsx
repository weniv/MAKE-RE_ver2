// 프로필 내용 업데이트
export default function updateProfile(e, name, data, setData) {
  setData({
    ...data,
    [name]: e.target.value,
  })
}
