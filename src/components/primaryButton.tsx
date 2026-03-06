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
      <div className='flex items-center justify-center min-h-10 gap-2 py-2.5 px-4 text-sm bg-primary text-white hover:bg-blue-800 rounded-md'>
          {children} {icon && icon}
      </div>
    </Link>
  )
}

export default PrimaryButton;