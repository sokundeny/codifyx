import React from 'react'

const PrimaryButton = ({ 
  children,
  icon 
}: { 
  children: string ,
  icon?: React.ReactNode
}) => {
  return (
    <div className='
      flex items-center justify-center gap-2 py-3 px-5 bg-primary hover:bg-primary-hover 
      font-semibold leading-6 text-white rounded-lg transition-color duration-200 ease-in-out'
    >
        {children} {icon && icon}
    </div>
  )
}

export default PrimaryButton;