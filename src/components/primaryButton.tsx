import React from 'react'

const PrimaryButton = ({ 
  children,
  icon 
}: { 
  children: string ,
  icon?: React.ReactNode
}) => {
  return (
    <div className='flex items-center justify-center gap-2 py-2.5 px-4 text-sm bg-primary text-white rounded-md'>
        {children} {icon && icon}
    </div>
  )
}

export default PrimaryButton;