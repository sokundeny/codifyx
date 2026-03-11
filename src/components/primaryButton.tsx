"use client"

import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({ 
  children,
  icon,
  navigate 
}: { 
  children: string ,
  icon?: React.ReactNode,
  navigate? :string
}) => {
  return (
    <Link href={navigate || "/"}>
      <div className='flex items-center justify-center min-h-10 gap-2 py-3 px-5 text-sm bg-primary font-semibold leading-6  text-white hover:bg-primary-hover rounded-lg transition-color duration-200 ease-in-out'>
          {children} {icon && icon}
      </div>
    </Link>
  )
}

export default PrimaryButton;