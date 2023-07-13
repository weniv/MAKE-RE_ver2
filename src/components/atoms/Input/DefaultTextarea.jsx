import { styled } from 'styled-components'
import LinkIcon from '../../../assets/icon-Url.svg'

export default function DefaultTextarea({
  children,
  width,
  marginRight,
  id,
  type,
  placeholder,
  inputData,
  setInputData,
}) {
  return (
    <Cont>
      <Label htmlFor={id}>{children}</Label>
      <TextArea
        id={id}
        type={type}
        placeholder={placeholder}
        width={width}
        marginRight={marginRight}
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value)
        }}
      />
    </Cont>
  )
}

const Cont = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`

const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
`

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: 92px;
  margin-right: ${(props) => props.marginRight};
  padding: 11px 0 11px;
  padding-left: ${(props) => (props.type === 'url' ? '36px' : '16px')};
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  background-image: ${(props) =>
    props.type === 'url' ? `url(${LinkIcon})` : null};
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px;
  resize: none;
`