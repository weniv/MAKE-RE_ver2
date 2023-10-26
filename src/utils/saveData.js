export const saveData = (title, data) => {
  localStorage.setItem(`${title}`, data)
}
