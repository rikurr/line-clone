import React, { ReactNode, ButtonHTMLAttributes } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  children,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      className="bg-primary hover:opacity-80 text-white font-bold py-2 px-4 rounded"
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
