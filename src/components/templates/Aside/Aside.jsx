import { styled } from 'styled-components'
import ColorPicker from '../../organisms/ColorPicker/ColorPicker'
import NavBar from '../../organisms/Nav/NavBar'
import PreviewBox from '../../organisms/Nav/PreviewBox'

export default function Aside({
  type,
  profileRef,
  introRef,
  careerRef,
  projectRef,
  experienceRef,
  certificateRef,
  educationRef,
  urlRef,
  ...props
}) {
  return (
    <AsideCont>
      {type === 'preview' && <ColorPicker type={type} />}
      <NavBar
        type={type}
        profileRef={profileRef}
        introRef={introRef}
        careerRef={careerRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        certificateRef={certificateRef}
        educationRef={educationRef}
        urlRef={urlRef}
        {...props}
      />
      <PreviewBox type={type} />
    </AsideCont>
  )
}

const AsideCont = styled.aside`
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`
