import React from 'react'
import Image from 'next/image'
import banner from '@/assets/images'

export default function Banner() {
  return (
    <Image src={banner} alt='Banner TKE' className='w-full h-full max-h-screen' />
  )
}
