import React from 'react'
import { styled } from 'styled-components'
import { ContributionInput } from '../../atoms/Input'
import { AddBtn } from '../../atoms/Button'
import { createArrdata, deleteArrdata } from '../../../utils'

export default function Contribution({
  id,
  idx,
  contributions,
  projectData,
  setProjectData,
}) {
  return (
    <Wrap>
      <Contribute>
        {contributions &&
          contributions.map((contribution, i) => (
            <ContributionInput
              id={i}
              idx={idx}
              value={contribution}
              contributions={contributions}
              projectData={projectData}
              setProjectData={setProjectData}
              onClick={() => {
                deleteArrdata(
                  i,
                  idx,
                  'contributions',
                  contributions,
                  projectData,
                  setProjectData
                )
              }}
            />
          ))}
      </Contribute>
      <AddBtn
        onClick={() => {
          createArrdata(id, 'contributions', projectData, setProjectData)
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
