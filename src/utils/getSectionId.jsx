/**
 * @param {string} sectionTitle 로컬에 저장된 section 제목
 * @param {number} defaultID 항목 변경 없을 때 기본 id 값
 * @returns
 */
export default function getSectionId(sectionTitle, defaultID) {
  const resumeOrder = JSON.parse(localStorage.getItem('resumeOrder'))
  const section =
    resumeOrder && resumeOrder.filter((item) => item.title === sectionTitle)
  const sectionId = resumeOrder ? section[0].id : defaultID

  return sectionId
}
