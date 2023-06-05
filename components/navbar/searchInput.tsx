import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className="flex-grow flex relative">
       <label htmlFor="search" className="absolute top-[50%] left-4 -translate-y-[50%] cursor-pointer"> <AiOutlineSearch className="text-2xl text-gray-500" /></label>
        <input id='search' type="text" placeholder='Search Flowbite' className="flex-grow rounded-md p-2 pl-10 pr-4" />
    </div>
  )
}

export default SearchInput