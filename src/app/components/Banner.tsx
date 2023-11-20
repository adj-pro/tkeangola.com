import React from 'react'
import Image from 'next/image'
import banner from '@/assets/images'

export default function Banner() {
  return (
    <div>
      <Image src={banner} alt='Banner TKE' className='w-full h-full max-h-screen' />
      <Image src={banner} alt='Banner TKE' className='w-full h-full max-h-screen md:hidden' />
      <Image src={banner} alt='Banner TKE' className='w-full h-full max-h-screen lg:hidden' />
      <Image src={banner} alt='Banner TKE' className='w-full h-full max-h-screen lg:hidden' />
    </div>
  )
}
