import { styled } from 'styled-components'
import ColorPicker from '../../organisms/ColorPicker/ColorPicker'
import NavBar from '../../organisms/Nav/NavBar'
import PreviewBox from '../../organisms/Nav/PreviewBox'

export default function Aside({ type }) {
  return (
    <AsideCont>
      {type === 'preview' && <ColorPicker type={type} />}
      <NavBar type={type} />
      <PreviewBox type={type} />
    </AsideCont>
  )
}

const AsideCont = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`
