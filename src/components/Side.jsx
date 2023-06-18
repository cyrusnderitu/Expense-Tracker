import React from "react";
import {BsThreeDots} from 'react-icons/bs'
import Payment from "./Payment";

const Side = () => {
  const payment = [
    {
      id: 1,
      name: "Amazon",
      price: 1000
    },
    {
      id: 2,
      name: "Internet",
      price: 800
    },
    {
      id: 3,
      name: "Netflix",
      price: 1100
    },
    {
      id: 4,
      name: "Bills",
      price: 1220
    }
  ]
  return (
    <div className="bg-slate-400 h-full p-4 overflow-hidden">
      <div className="w-full h-[160px] rounded-lg bg-green-300">

      </div>
      <div className="sends mt-4">
        <div className="display flex justify-between items-center">
          <h2 className="font-bold">Quick send</h2>
          <select name="" id="" className="font-pops rounded-lg p-1 outline-none cursor-pointer">
            <option value="default">KSH</option>
            <option value="dollar" >USD</option>
            <option value="pound">GBP</option>
            <option value="euro">EUR</option>
          </select>
        </div>
        <div className="flex items-between gap-x-4 mt-4">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-gray-300 flex items-center justify-center text-2xl font-bold">+</div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-orange-300"></div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-orange-300"></div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-orange-300"></div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-orange-300"></div>
        </div>
        <form className="">
          <input type="number" name="amount" id="" className="w-full py-2 mt-8 bg-gray-300 placeholder:text-gray-600 text-black indent-4 rounded-2xl placeholder:font-bold outline-none" placeholder="Amount: 00.00"/>
          <button className="w-full py-2 text-white bg-blue-400 rounded-xl mt-4 font-semibold">Send Money</button>
        </form>
      </div>
      <div className="mt-4">
          <div className="flex justify-between itmes-center">
            <h2 className="font-bold">Card Payments</h2>
            <BsThreeDots />
          </div>
          <div className="overflow-y-scroll px-2">
            {payment && payment.map((item)=>(
              <Payment key={item.id} payment={item}/>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Side;
