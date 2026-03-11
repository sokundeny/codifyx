"use client"

import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/hooks/themeHook'

const SecondaryButton = ({ 
  children,
  icon,
  navigate 
}: { 
  children: string ,
  icon?: React.ReactNode,
  navigate? :string
}) => {

  const{theme} =useTheme();

  return (
    <Link href={navigate || "/"}>
      <div className={`
          flex items-center justify-center gap-2 
          py-3 px-5 text-sm  min-h-10 leading-6
          ${theme=='dark'?'text-foreground':'text-text-secondary'}
          ${theme=='dark'?'bg-background-muted':'bg-page'} 
          font-semibold 
          border-border-default rounded-md shadow
        `}>
          {children} {icon && icon}
      </div>
    </Link>
  )
}

export default SecondaryButton;