import React from 'react'

type Props = {}

const Or = (props: Props) => {
  return (
    <div className="relative py-3 flex items-center justify-center">
        <div className="absolute left-0 top-[50%] w-[45%] h-[1px] bg-gray-400 block"></div>
        <div className="text-gray-400 text-sm">or</div>
        <div className="absolute h-[1px] w-[45%] bg-gray-400 top-[50%] right-0"></div>
    </div>
  )
}

export default Or