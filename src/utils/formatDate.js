export default function formateDate(date) {
  const dateObj = new Date(date)
  const formattedDate = new Intl.DateTimeFormat('ko-KR')
    .format(dateObj)
    .replace(/\.$/, '')
  return formattedDate
}
