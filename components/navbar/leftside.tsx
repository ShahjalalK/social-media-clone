import React, { KeyboardEventHandler, useEffect, useState } from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import { AllUserState, userType } from '@/recoil/userAuthAtom'
import { useRouter } from 'next/router'

type Props = {}

const LeftSide = (props: Props) => {
  const router = useRouter()
  const allUserValue = useRecoilValue(AllUserState)
  const [filterUser, setFilterUser] = useState([])

  const [searchShow, setSearchShow] = useState<boolean>(false)
  const [drakOver, setDrakOver] = useState<boolean>(false)

  const [search, setSearch] = useState<string>("")

  const handleSearch = () => {
    if(search !== ''){
      let searched =  allUserValue.filter((user) => {
        return Object.values(user).join('').toLocaleLowerCase().includes(search.toLowerCase())
      })
  
      setFilterUser(searched as any)

    }else{
      setFilterUser(allUserValue as any)
    }
   
  }

  useEffect(() => {
    let debound = setTimeout(() => {
      handleSearch()
    }, 1000)
    return () => clearTimeout(debound)
  }, [search])
 
  return (
    <div className="flex  items-center space-x-2">
       <Link href="/"> <Image src="/linkedin.png" alt='linkedin' width={35} height={35} className="w-7 lg:w-9 py-1 lg:py-0" /></Link>

        <div className="text-xl cursor-pointer lg:hidden text-gray-600 hover:text-gray-700"  onClick={() => setSearchShow(true)}>
        <AiOutlineSearch  />
        </div>

        <div className={`${searchShow ? "max-lg:block" : "hidden"} lg:inline-flex absolute top-[50%] -translate-y-[50%] left-0 -translate-x-[2%] lg:-translate-x-0 lg:left-[3.5%] w-[98%] lg:w-[350px]`}>
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
      <AiOutlineSearch className="text-2xl text-gray-400"/>
    </div>
    <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onClick={() => setDrakOver(true)}
   onKeyPress={(e) => {
    let key= e.keyCode || e.which
    console.log(key)
    if (key==13){
      setSearchShow(false)
   }
 }}
      type="search"
      id="default-search"
      className="block w-full lg:w-[280px] focus:lg:w-[350px] transition-[width] duration-200 ease-in-out  p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-[#EEF3F8] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search"
      
    />
   
  </div>
  
  <div className={`absolute top-9 lg:top-12 rounded-b -left-1 w-full lg:w-[430px] bg-white shadow z-50 py-3 overflow-hidden ${ drakOver ? "flex" : "hidden"} flex-col space-y-1`}>
    {search.length === 0 ? 

    <></>
    : 
 <div>
  {filterUser.length === 0 ? 
  
  <div className="px-3 capitalize">No results found...</div>
  :

  filterUser.map((item : userType) => (
    <div key={item.uid} onClick={() => {
      router.push(`/in/${item.uid}`)
      setSearchShow(false)
      setSearch("")
      setDrakOver(false)
    }} className="flex items-center space-x-2 flex-grow px-2 py-1 cursor-pointer hover:bg-gray-200">
    <BiSearchAlt2 className="text-xl" />
    <div className="flex-grow flex flex-col -space-y-1">
    <p className="flex-grow capitalize font-medium whitespace-normal text-sm">{item.displayName?.slice(0, 30) || item.email.split("@")[0].slice(0, 30)}...
    </p>
    <p className="line-clamp-1 text-xs whitespace-normal">{item.title.slice(0, 60)}...</p>
    </div>
    
    <Image src={item.photoURL} alt='s' width={50} height={50} className="w-8 h-8 object-cover rounded-full" />
  </div>
   ))


}
     
    
 </div>
  
    }
    



  </div>
  <div onClick={() => {
   
    setDrakOver(false)
  }} className={`${drakOver ? "block" : "hidden"} fixed top-14 left-0 w-full h-full bg-black/60 z-40`}></div>  
    </div>
  )
}

export default LeftSide