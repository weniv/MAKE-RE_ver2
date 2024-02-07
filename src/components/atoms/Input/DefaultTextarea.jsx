import { styled } from 'styled-components'
import LinkIcon from '../../../assets/icon-Url.svg'
import { useEffect, useRef } from 'react'

export default function DefaultTextarea({
  children,
  width,
  height,
  marginRight,
  id,
  type,
  name,
  placeholder,
  lineHeight,
  inputData,
  onChange,
  onKeyDown,
}) {
  const textareaRef = useRef()
  const handleResizeHeight = () => {
    textareaRef.current.style.height = 'auto' //height 초기화
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }

  useEffect(() => {
    if (type === 'intro') {
      textareaRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!height) {
      handleResizeHeight()
    }
  }, [inputData])

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
        onChange={(e) => onChange(e)}
        onKeyDown={onKeyDown}
        lineHeight={lineHeight}
        rows={1}
        ref={textareaRef}
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
  color: var(--gray-lv4-color);
  font-size: 12px;
  font-weight: 700;
`

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  min-height: 42px;
  height: ${(props) => props.height};
  font-size: ${(props) => (props.type === 'intro' ? '16px' : '14px')};
  line-height: ${(props) => props.lineHeight};
  margin-right: ${(props) => props.marginRight};
  padding: ${(props) => (props.type === 'intro' ? '20px' : '11px 16px')};
  border-radius: 10px;
  color: var(--surface-color);
  background-image: ${(props) =>
    props.type === 'url' ? `url(${LinkIcon})` : null};
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px;
  resize: none;
  overflow-y: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
