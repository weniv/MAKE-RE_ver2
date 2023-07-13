import React from 'react'
import { styled } from 'styled-components'
import { SkillList } from '../../atoms/SkillList'
import { DefaultInput } from '../../atoms/Input'
import { createArrdata } from '../../../utils'

export default function Skills({ id, skills, projectData, setProjectData }) {
  const deleteSkill = (id) => {
    const result = skills.filter((skill, i) => i !== id)
    // projectData[idx].skills = result
    // setProjectData([...projectData])
  }

  // enter키 눌렀을때, SkillList 생성 이벤트 실행
  const createSkillList = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      skills.push(e.target.value)
      projectData.map((el) => (el.id === id ? (el.skills = skills) : el.skills))
      createArrdata(id, 'skills', projectData, setProjectData)
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
            // id={id}
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
