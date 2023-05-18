import React from 'react'
import Side from '../Side'
import Menu from '../Menu'
import Main from '../Main'

const Dashboard = () => {
  return (
    <div className="h-full w-full grid grid-cols-[280px_minmax(500px,_1fr)_340px] ">
        <Menu />
        <Main />
        <Side />
    </div>
  )
}

export default Dashboard
