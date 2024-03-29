/**
 * input onChange 및 setter 함수
 * @param {function} e 이벤트
 * @param {number} idx 인덱스
 * @param {any[]} data state
 * @param {function} setData setter 함수
 * @returns
 */
export default function updateData(e, idx, data, setData) {
  const { name, value } = e.target
  if (e.target.maxLength !== -1 && value.length > e.target.maxLength) {
    return
  } else {
    setData(
      data.map((el, i) =>
        i === idx
          ? {
              ...el,
              [name]: value,
            }
          : el
      )
    )
  }

  return data
}
