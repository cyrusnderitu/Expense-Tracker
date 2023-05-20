import React from 'react'
import Side from '../Side'
import Menu from '../Menu'
import Main from '../Main'

const Dashboard = () => {
  return (
    <div className="h-full w-full grid grid-cols-[250px_minmax(500px,_1fr)_350px] ">
        <Menu />
        <Main />
        <Side />
    </div>
  )
}

export default Dashboard
