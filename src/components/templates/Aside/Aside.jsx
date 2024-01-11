import { styled } from 'styled-components'
import ColorPicker from '../../organisms/ColorPicker/ColorPicker'
import NavBar from '../../organisms/Nav/NavBar'
import PreviewBox from '../../organisms/Nav/PreviewBox'

export default function Aside({ type, id, ...props }) {
  return (
    <AsideCont>
      {type === 'preview' && <ColorPicker type={type} />}
      <NavBar type={type} scrollRef={props.scrollRef} />
      <PreviewBox type={type} {...props} id={id} />
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
