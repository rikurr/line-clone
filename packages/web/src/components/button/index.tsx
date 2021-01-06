import React, { ReactNode, ButtonHTMLAttributes } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  children,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      className="w-1/5 rounded-xl bg-linkText text-white"
      {...rest}
    >
      {children}
    </button>
  )
}
