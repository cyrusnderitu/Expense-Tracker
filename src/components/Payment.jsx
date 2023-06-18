import React from 'react'

const Payment = ({payment}) => {
  return (
    <div className='flex justify-between items-center'>
    <div className='flex gap-x-6 my-4'>
        <div className='w-[30px] h-[30px] rounded-[50%] bg-red-400'></div>
        <div className="-ml-2">
            <h2 className='font-bold'>{payment.name}</h2>
        </div>
    </div>
  <p className='flex justify-end'>${payment.price}</p>
</div>
  )
}

export default Payment
