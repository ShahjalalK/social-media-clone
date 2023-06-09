import React from 'react'
import NetworkCard from './networkCard'

type Props = {}

const RightSide = (props: Props) => {
  return (
    <div className="col-span-1 lg:col-span-2 bg-white shadow rounded-lg border-gray-300 p-3">
        <div className="flex items-center flex-grow text-gray-500">
            <p className="flex-grow">People you follow also follow these people</p>
            <p className="cursor-pointer hover:bg-gray-200 rounded px-3 py-1 whitespace-nowrap">See All</p>           
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-3">
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
                <NetworkCard />
            </div>
    </div>
  )
}

export default RightSide