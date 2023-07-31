export default function updateArrdata(e, id, idx, data, state, setState) {
  try {
    const newArr = [...data]

    data.map((el, i) => {
      if (id === i) {
        newArr[i] = e.target.value
      }
      state[idx].contributions = newArr
      setState([...state])
    })
  } catch (err) {
    console.log(err)
    console.log('데이터 수정에 실패하였습니다.')
  }
}
