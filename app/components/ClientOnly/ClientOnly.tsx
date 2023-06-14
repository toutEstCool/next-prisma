'use client';

import React, { useEffect, useState } from 'react'
import { IPropsClientOnly } from './IProps.interface';

export const ClientOnly: React.FC<IPropsClientOnly> = ({ children }): JSX.Element | null => {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null;
  } 
  return (
    <div>{children}</div>
  )
}
