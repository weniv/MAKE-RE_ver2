import { useEffect } from 'react'
import { useResumeStore } from '../store/ResumeStore'

/**
 * 전화번호 사이에 하이픈 넣어주는 함수
 * @param {string}  num - 변환할 전화번호
 * @return {string} 하이픈을 넣어서 반환된 전화번호
 */
export const parsePhoneNumber = (num) => {
  return num
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
}

/**
 * 저장된 이메일 id와 이메일 domain 값을 가져오는 함수
 * @param {number}  idx - 가져올 이메일 구성요소의 인덱스 (0-id, 1-domain)
 * @return {string} 이메일 구성요소
 */
export const getStoreEmailPart = (idx, fullEmail) => {
  if (fullEmail) {
    return fullEmail.split('@')[idx]
  } else {
    return ''
  }
}

/**
 * 이메일 구성요소(id, domain)을 조합하여 완전한 이메일을 구성하는 함수
 * @param {string}  id - 이메일 id (@ 기준 앞 부분)
 * @param {string}  id - 이메일 domain (@ 기준 뒷 부분)
 * @return {string} 이메일 (fullEmail)
 */
export const joinEmail = (id, domain) => {
  let email = [id, domain].join('@')
  return email
}

/**
 * 새로운 기술 스택 추가
 */
export const createSkillList = (ref, skills, setSkills) => {
  const newSkill = ref.current.value
  setSkills([...skills, newSkill])
  ref.current.value = ''
}

/**
 * 기술 스택 삭제
 */
export const deleteSkillItem = (idx, skills, setSkills) => {
  const result = skills.filter((_, i) => i !== idx)
  setSkills(result)
}

/**
 * 데이터 업데이트
 */
export const useDataEffect = (id, key, value) => {
  const { updateProfileData } = useResumeStore()

  useEffect(() => {
    updateProfileData(id, key, value)
  }, [id, key, value, updateProfileData])
}
