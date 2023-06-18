import React from 'react'
import { BiDollar } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

const Pockets = () => {
  return (
    <div className="h-full p-4">
        <div className="grid md:grid-cols-3 gap-x-4">
        <div className="shadow-md py-8 px-2 rounded-md">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <BiDollar className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Cash Available
              </h2>
              <p className="text-xl font-extrabold">
                $<span>42,500</span>
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md py-8 px-2 rounded-md">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <BsFillCreditCard2FrontFill className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Credit Limit
              </h2>
              <p className="text-xl font-extrabold">
                $<span>27,650</span>
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md py-8 px-2 rounded-md">
          <div className="flex items-center gap-x-2 justify-start">
            <div className="border rounded-[50%] bg-gray-200 p-2 hover:bg-blue-500 hover:cursor-pointer transition-[4s] hover:text-white">
              <GiTakeMyMoney className="text-xl" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-500 capitalize text-[13px]">
                Total Debt
              </h2>
              <p className="text-xl font-extrabold">
                $<span>17,350</span>
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Pockets
