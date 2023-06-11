import { firestore } from '@/firebase/firebase.config'
import { editProfileState } from '@/recoil/editProfileAtom'
import { UserState, userType } from '@/recoil/userAuthAtom'
import { doc, updateDoc } from 'firebase/firestore'
import { Spinner } from 'flowbite-react'
import { userInfo } from 'os'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

type Props = {}

const ProfileInfo = (props: Props) => {
  const [userValue, setUserUserValue] = useRecoilState(UserState)
  const setEditProfile = useSetRecoilState(editProfileState)
 
  const [loading, setLoading] = useState<boolean>(false)
  const changeHandler = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserUserValue((prev) => ({
          ...prev,
          [e.target.name] : e.target.value
        }))
  }

  const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const docRef = doc(firestore, `users/${userValue.uid}`)
    updateDoc(docRef, {
      displayName: userValue.displayName,
  title: userValue.title,
  location: userValue.location,
  webURL: userValue.webURL,
  description: userValue.description,
      
    }).then(() => {
      
      toast("Your profile has been updated")
    })
    setEditProfile((prev) => ({
      ...prev,
      open : false
    }))
    setLoading(false)
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <div>
            <p className="text-xs text-gray-400">* Indicates required</p>
            <h1 className="text-2xl font-medium">Basic info</h1>
        </div>
        <div className="flex flex-col space-y-1">
        <div><label htmlFor="displayName" className="text-gray-400 text-xs">Display Name*</label></div>
          <input onChange={changeHandler} name='displayName' value={userValue.displayName as string} id='displayName' type="text" className="w-full p-1 rounded-lg border border-gray-500" required />
        </div>
        <div className="flex flex-col space-y-1">
        <div><label htmlFor="title" className="text-gray-400 text-xs">Headline*</label></div>
          <input onChange={changeHandler} name='title' value={userValue.title as string} id='title' type="text" className="w-full p-1 rounded-lg border border-gray-500" required />
        </div>
        <div className="flex flex-col space-y-1">
        <div><label htmlFor="location" className="text-gray-400 text-xs">City, Country/Region*</label></div>
          <input onChange={changeHandler} name='location' value={userValue.location as string} id='location' type="text" className="w-full p-1 rounded-lg border border-gray-500" required />
        </div>
        <div className="flex flex-col space-y-1">
        <div><label htmlFor="webURL" className="text-gray-400 text-xs">Link</label></div>
        <input onChange={changeHandler} name='webURL' value={userValue.webURL as string} id='webURL' type="text" className="w-full p-1 rounded-lg border border-gray-500" required />
        </div>
        <div className="flex flex-col space-y-1">
        <div><label htmlFor="description" className="text-gray-400 text-xs">Description</label></div>
          <textarea onChange={changeHandler} name='description' value={userValue.description as string} id='description' className="w-full p-1 rounded-lg border border-gray-500 min-h-min" rows={10} ></textarea>
        </div>
        <div className='flex justify-end'>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-5 py-2 rounded-full">{loading ? <Spinner /> : "Save"}</button>
        </div>
    </form>
  )
}

export default ProfileInfo