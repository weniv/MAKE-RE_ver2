import React from 'react'
import { styled } from 'styled-components'
import { ContributionInput } from '../../atoms/Input'
import { AddBtn } from '../../atoms/Button'
import { createArrdata, deleteArrdata } from '../../../utils'

export default function Contribution({
  id,
  idx,
  contributes,
  projectData,
  setProjectData,
}) {
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
              onClick={() => {
                deleteArrdata(
                  i,
                  idx,
                  'contributes',
                  contributes,
                  projectData,
                  setProjectData
                )
              }}
            />
          ))}
      </Contribute>
      <AddBtn
        onClick={() => {
          createArrdata(id, 'contributes', projectData, setProjectData)
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
