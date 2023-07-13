export default function createArrdata(idx, name, data, setData) {
  const newArr = [...data]

  if (name !== 'skills') {
    newArr[idx][name].push('')
    setData(idx + 1 === data[idx].id ? newArr : data)
  }

  newArr.map((el) => setData(el.id === idx ? newArr : data))
}
