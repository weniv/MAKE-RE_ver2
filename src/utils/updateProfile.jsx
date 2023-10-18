// 프로필 내용 업데이트
export default function updateProfile(e, name, data, setData) {
  if (name === 'phoneNumber') {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '')
    setData({
      ...data,
      [name]: onlyNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
    })
    if (e.target.value.length === 11) {
      setData({
        ...data,
        [name]: e.target.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      })
    }
  } else {
    setData({
      ...data,
      [name]: e.target.value,
    })
  }
}
