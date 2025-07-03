import React, { useEffect } from 'react'
import {useAuth} from '../contecxt/AuthContext'
import {Link} from 'react-router-dom'
import {NavigationLink} from '../components/shared/NavigationLink'
export default function Header() {
  const user= useAuth();
  const { logoutUser } = useAuth()

  return (
    <header>
    <nav className="sticky top-0 z-50 bg-[#0f172a] shadow-sm p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold  text-white flex items-center gap-2 "><img className='w-8 h-8  rounded-lg 'src="./mern.png" alt="reactsvg" />MERN Gpt</a>
         <div>
          {
          user.loading?<>
           <>
           <NavigationLink to='/chat' className='bg-sky-400 hover:bg-sky-700 text-white' childern={'go to chat'} />
             <button
                  onClick={logoutUser}
                  className="ml-2 bg-gray-400 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
           </>
          </>
          :
          <>
          <NavigationLink to='/login' className='bg-sky-400 hover:bg-sky-700 text-white' childern={'login'} />
          <NavigationLink to='/signup' className='bg-gray-400 hover:bg-gray-700 text-white' childern={'signup'} />
          </>
         }
         </div>
         
      </div>
    </nav>
    </header>
  )
}
