/**
 * 배열 데이터 삭제: ex) project - skills, contributes
 * @param {number} id
 * @param {number} idx
 * @param {string} name
 * @param {string[]} data
 * @param {string[]} state
 * @param {function} setState
 */
export default function deleteArrdata(id, idx, name, data, state, setState) {
  try {
    const result = data.filter((el, i) => i !== id)
    state[idx][name] = result
    setState([...state])
  } catch (err) {
    console.log(err)
    console.log('데이터를 삭제하는데 실패했습니다.')
  }
}
