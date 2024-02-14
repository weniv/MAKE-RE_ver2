/**
 *
 * @param {number} id 아이디
 * @param {object} val 추가할 내용 객체
 * @param {any[]} data 기존 내용 배열
 * @param {function} setData 상태 변경함수
 * @returns
 */
export default function addData(id, val, data, setData) {
  val.id = id
  setData([...data, val])

  return data
}
