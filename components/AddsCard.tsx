import React from 'react'
import Image from 'next/image'

type Props = {}

const AddsCard = (props: Props) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer">
        <Image src="/adds.png" width={500} height={500} alt="ads" className="w-full h-full object-fill" />
    </div>
  )
}

export default AddsCard