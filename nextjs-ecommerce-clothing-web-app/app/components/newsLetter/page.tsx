import React from 'react'
import { Input } from '@/components/ui/input'

const page = () => {
    return (
        <div className='relative flex justify-center align-center w-full'>
            <p className='text-7xl opacity-20'>NewsLetter</p>
            <div className='absolute top-0'>
                <header> Subscribe Our Newsletter</header>
                <p>Get the latest information and promo offers directly</p>
                <Input className='' />
            </div>
        </div>
    )
}

export default page