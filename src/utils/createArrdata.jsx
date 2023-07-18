export default function createArrdata(id, name, data, setData) {
  const newArr = [...data]

  if (name === 'skills') {
    newArr.map((el) => setData(el.id === id ? [...newArr] : [...data]))
  } else {
    newArr.map((el) => (el.id === id ? el[name].push('') : null))
    data.map((el) => setData(id === el.id ? [...newArr] : [...data]))
  }
}
