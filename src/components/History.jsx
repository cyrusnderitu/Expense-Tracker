import React from 'react'

const History = ({history}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-x-6 my-4'>
            <span>{history.date}</span>
            <div className='w-[30px] h-[30px] rounded-[50%] bg-red-400'></div>
            <div className="-ml-2">
                <h2 className='font-bold'>{history.name}</h2>
                <p className='text-[12px]'>{history.bank} bank</p>
            </div>
        </div>
      <p className='flex justify-end'>{history.cash}</p>
    </div>
  )
}

export default History
