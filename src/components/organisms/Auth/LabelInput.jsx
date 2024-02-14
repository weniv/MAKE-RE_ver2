import React from 'react'
import { Label, Input } from '../../atoms/Auth'

export default function PasswordInput({
  title,
  name,
  type,
  handleOnChange,
  warning,
}) {
  return (
    <div>
      <Label htmlFor={name} warning={warning}>
        {title}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={handleOnChange}
        warning={warning}
      />
    </div>
  )
}
