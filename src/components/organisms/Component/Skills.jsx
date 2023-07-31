import React from 'react'
import { styled } from 'styled-components'
import { SkillList } from '../../atoms/SkillList'
import { DefaultInput } from '../../atoms/Input'
import { createArrdata, deleteArrdata } from '../../../utils'

export default function Skills({
  id,
  idx,
  skills,
  projectData,
  setProjectData,
}) {
  /** enter키 눌렀을때, SkillList 생성 */
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
        width="260px"
        onKeyDown={createSkillList}
        placeholder="예) Python"
      />
      <SkillListWrap>
        {skills.map((skill, i) => (
          <SkillList
            key={id}
            type="delete"
            onClick={() => {
              deleteArrdata(
                i,
                idx,
                'skills',
                skills,
                projectData,
                setProjectData
              )
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
  flex-wrap: wrap;
  gap: 6px;
`
