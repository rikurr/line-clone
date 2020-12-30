import React, { useEffect } from 'react'

type Props = {
  onRedirect: () => void
}

export const Public: React.FC<Props> = ({ onRedirect }) => {
  useEffect(() => {
    onRedirect()
  }, [onRedirect])
  return <></>
}
