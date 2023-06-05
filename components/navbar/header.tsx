import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchInput from './searchInput'
import AuthButton from './authButton'
import UserMenu from './userMenu'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config'



type Props = {}

const Header = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
 
  return (
    <header className="bg-blue-900 py-2">
        <nav className="container flex items-center space-x-5 flex-grow">
            <Link href="/" className="text-2xl uppercase font-medium text-white">Flowbite</Link>           
            <SearchInput />
            {user ? <UserMenu /> : <AuthButton />}
            
            
        </nav>
    </header>
  )
}

export default Header