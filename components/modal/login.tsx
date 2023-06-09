import { Button } from 'flowbite-react'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-5">Make the most of your professional life</h1>
      <form className="flex flex-col space-y-3 max-w-sm bg-white p-5 mx-auto rounded-lg shadow">        
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm">Email</label>
        <input id='email' type="email" className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer" required />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="text-sm">Password (6 or more characters)
</label>
        <input id='password' type="password" className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer" required />
      </div>
      <div>
        <p className="text-center text-xs">By clicking Agree & Join, you agree to the LinkedIn <span className="text-blue-700 font-medium">User Agreement, Privacy Policy,</span> and <span className="text-blue-700 font-medium">Cookie Policy.</span></p>
      </div>
      <button className="w-full rounded-full py-2 text-lg bg-[#0072b1] text-white hover:bg-blue-800 transition-colors duration-100 focus:ring-4 focus:ring-blue-300 font-medium px-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agree & Join</button>
    </form>
    </div>
  )
}

export default Login