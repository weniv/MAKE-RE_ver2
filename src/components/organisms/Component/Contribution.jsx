import React from 'react'
import { styled } from 'styled-components'
import { ContributionInput } from '../../atoms/Input'
import { AddBtn } from '../../atoms/Button'

export default function Contribution({
  idx,
  contributes,
  projectData,
  setProjectData,
}) {
  const handleAddArr = (idx, name) => {
    const newArr = [...projectData]
    newArr[idx][name].push('')
    setProjectData(idx + 1 === projectData[idx].id ? newArr : projectData)
  }

  return (
    <Wrap>
      <Contribute>
        {contributes &&
          contributes.map((inputData, i) => (
            <ContributionInput
              id={i}
              idx={idx}
              value={inputData}
              contributes={contributes}
              projectData={projectData}
              setProjectData={setProjectData}
            />
          ))}
      </Contribute>
      <AddBtn
        onClick={() => {
          handleAddArr(idx, 'contributes')
        }}
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
`

const Contribute = styled.div`
  display: flex;
  flex-direction: column;
`
