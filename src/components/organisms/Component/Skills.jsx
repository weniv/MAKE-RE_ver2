import React from 'react'
import { styled } from 'styled-components'
import { SkillList } from '../../atoms/SkillList'
import { DefaultInput } from '../../atoms/Input'
import { createArrdata } from '../../../utils'

export default function Skills({ idx, skills, projectData, setProjectData }) {
  const deleteSkill = (idx) => {
    const result = skills.filter((skill, i) => i !== idx)
    projectData[idx].skills = result
    setProjectData([...projectData])
    // state 변경만 해주면 완료
  }

  // enter키 눌렀을때, SkillList 생성 이벤트 실행
  const createSkillList = (e) => {
    if (e.keyCode === 13) {
      skills.push(e.target.value)
      projectData[idx].skills = skills
      createArrdata(idx, 'skills', projectData, setProjectData)
      console.log('sfd', projectData)
      e.target.value = ''
    }
  }

  return (
    <>
      <DefaultInput
        name="skills"
        type="text"
        onKeyDown={createSkillList}
        placeholder="예) Python"
      />
      <SkillListWrap>
        {skills.map((skill, idx) => (
          <SkillList
            key={idx}
            type="delete"
            idx={idx}
            onClick={() => {
              deleteSkill(idx)
            }}
          >
            {skill}
          </SkillList>
        ))}
      </SkillListWrap>
    </>
  )
}

const SkillListWrap = styled.div`
  margin-top: 20px;
  display: flex;
`
