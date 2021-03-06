import React, { ChangeEvent, InputHTMLAttributes } from 'react'

type Props = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputText: React.FC<Props> = ({
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className="border border-gray p-2 rounded-xl mr-2 w-4/5"
      value={value}
      onChange={onChange}
    />
  )
}
