'use client';

import React from 'react'
import { IPropsClientOnly } from './IProps.interface';

export const ClientOnly: React.FC<IPropsClientOnly> = ({ children }): JSX.Element | null => {
  const [hasMounted, setHasMounted] = React.useState(false)
  
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null;
  } 
  return (
    <div>{children}</div>
  )
}
