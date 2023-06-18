import React, {useEffect} from 'react'
import {RiDashboardLine} from 'react-icons/ri'
import { AiFillSetting} from 'react-icons/ai'
import {TbCoins, TbReportAnalytics} from 'react-icons/tb'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {MdSupervisorAccount} from 'react-icons/md'

const Menu = ({active, setActive}) => {

  useEffect(()=>{
    console.log(active);
  }, [active])
  return (
    <div className='bg-blue-500 h-full p-4'>
      <h1 className='font-bold text-white text-2xl mb-8'>Cyrotec</h1>
      <ul className='text-white font-semibold grid gap-y-6'>
        <li className={`flex items-center gap-2 text-md hover:cursor-pointer ${active === "dash"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("dash")}><RiDashboardLine className='text-xl' />Dashboard</li>
        <li className={`flex items-center gap-2 text-md hover:cursor-pointer ${active === "money"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("money")}><TbCoins className='text-xl'/>Pockets</li>
        <li className={`flex items-center gap-2 text-md hover:cursor-pointer ${active === "store"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("store")}><BsFillBoxSeamFill className='text-xl'/>Inventory</li>
        <li className={`flex items-center gap-2 text-md hover:cursor-pointer ${active === "contact"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("contact")}><MdSupervisorAccount className='text-xl'/>Contacts</li>
        <li className={`flex items-center gap-2 text-md hover:cursor-pointer ${active === "report"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("report")}><TbReportAnalytics className='text-xl'/>Report</li>
      </ul>
      <div className='md:mt-48 text-white'>
        <p className={`flex items-center font-semibold gap-2 text-md hover:cursor-pointer ${active === "settings"? ("bg-white -mr-4 -ml-2 py-2 pl-3 text-black rounded-tl-2xl rounded-bl-2xl"): ""}`} onClick={()=> setActive("settings")}><AiFillSetting className='text-xl'/> Settings</p>
      </div>
    </div>
  )
}
export default Menu
