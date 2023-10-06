import { styled } from 'styled-components'
import LinkIcon from '../../../assets/icon-Url.svg'

export default function DefaultTextarea({
  children,
  width,
  height,
  marginRight,
  id,
  type,
  name,
  placeholder,
  inputData,
  onChange,
  onKeyDown,
}) {
  return (
    <Cont type={type}>
      <Label htmlFor={id}>{children}</Label>
      <TextArea
        id={id}
        type={type}
        name={name}
        height={height}
        placeholder={placeholder}
        width={width}
        marginRight={marginRight}
        value={inputData}
        onChange={onChange}
        onKeyDown={onKeyDown}
        rows={1}
      />
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* gap: ${(props) => (props.type === 'project' ? '8px' : null)}; */
  gap: 8px;
`

const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
`

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => (props.type === 'intro' ? '16px' : '14px')};
  line-height: ${(props) => props.type === 'intro' && '28px'};
  margin-right: ${(props) => props.marginRight};
  padding: ${(props) => (props.type === 'intro' ? '20px' : '11px 16px')};
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  background-image: ${(props) =>
    props.type === 'url' ? `url(${LinkIcon})` : null};
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px;
  resize: none;
  overflow-y: hidden;
`
