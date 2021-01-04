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
      className="bg-primary hover:opacity-80 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  )
}
