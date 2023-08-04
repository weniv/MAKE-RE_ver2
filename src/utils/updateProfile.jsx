// 프로필 내용 업데이트
export default function updateProfile(e, name, setData) {
  setData((prevData) => ({
    ...prevData,
    [name]: e.target.value,
  }))
}
