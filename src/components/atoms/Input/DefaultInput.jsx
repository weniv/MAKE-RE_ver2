import { styled } from 'styled-components'
import LinkIcon from '../../../assets/icon-Url.svg'

export default function DefaultInput({
  children,
  width,
  marginRight,
  id,
  type,
  name,
  placeholder,
  inputData,
  setInputData,
  onChange,
}) {
  return (
    <InputCont>
      <Label htmlFor={id}>{children}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        width={width}
        marginRight={marginRight}
        value={inputData}
        // onChange={(e) => {
        //   setInputData(e.target.value)
        // }}
        onChange={onChange}
      />
    </InputCont>
  )
}

const InputCont = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`

const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
`

const Input = styled.input`
  width: ${(props) => props.width};
  height: 42px;
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
`
