import React from 'react'
import {RiDashboardLine} from 'react-icons/ri'
import {AiFillTag, AiFillSetting} from 'react-icons/ai'
import {TbCoins, TbReportAnalytics} from 'react-icons/tb'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {MdSupervisorAccount} from 'react-icons/md'

const Menu = () => {
  return (
    <div className='bg-blue-500 h-full p-4'>
      <h1 className='font-bold text-white text-2xl mb-8'>Cyrotec</h1>
      <ul className='text-white font-semibold grid gap-y-6'>
        <li className="flex items-center gap-2 text-md active hover:cursor-pointer"><RiDashboardLine className='text-xl'/>Dashboard</li>
        <li className="flex items-center gap-2 text-md hover:cursor-pointer"><AiFillTag className='text-xl'/>Sales</li>
        <li className="flex items-center gap-2 text-md hover:cursor-pointer"><TbCoins className='text-xl'/>Purchase</li>
        <li className="flex items-center gap-2 text-md hover:cursor-pointer"><BsFillBoxSeamFill className='text-xl'/>Inventory</li>
        <li className="flex items-center gap-2 text-md hover:cursor-pointer"><MdSupervisorAccount className='text-xl'/>Accounts</li>
        <li className="flex items-center gap-2 text-md hover:cursor-pointer"><TbReportAnalytics className='text-xl'/>Report</li>
      </ul>
      <div className='md:mt-48'>
        <p className="flex items-center gap-2 text-md font-semibold hover:cursor-pointer text-white"><AiFillSetting className='text-xl'/> Settings</p>
      </div>
    </div>
  )
}

export default Menu
