import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full bg-white h-screen font-pops overflow-hidden'>
      {children}
    </div>
  )
}

export default Layout
