import React from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import img from './../../assets/event1.webp'

const page = () => {
  return (
    <div>
      <div>
        <header className='text-2xl text-black font-bold'>
          Shopping Cart
        </header>
      </div>

      <div className='flex justify-between'>
        <div className='bg-[#d7d7d9]  flex justify-center items-end w-[150px] h-[200px] rounded-lg'>

          <Image src={img} alt="" className='w-auto h-full' />
        </div>
        <div >
          <div className='flex justify-between items-center'>
            <h1 className='text-lg  font-normal'>Cameryn Sash Tie Dress</h1>
            <div className='item-delete'>
              <Trash2 />
            </div>
          </div>
          <p className='text-lg text-gray-600 font-medium'>Dress</p>
          <p className='font-bold text-lg'>Delivery Estimation</p>
          <p className='text-md text-yellow-400 font-bold'> 5 Working Days</p>
          <div className='flex justify-between item-center'>
            <p className='text-lg font-bold'> Price</p>
            <div className='flex justify-between item-center w-28'>
              <div className='subtract'>
                <div className='h-7 w-7 bg-gray-100 rounded-full font-medium text-slate-600 flex justify-center items-center '>
                  <Minus className='h-4' />
                </div>
              </div>
              <p>1</p>
              <div className='plus'>
                <div className='h-7 w-7 bg-gray-100 rounded-full font-medium text-slate-600  flex justify-center items-center'>
                  <Plus className='h-4' />
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default page