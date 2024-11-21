import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useAuthStore } from '../../../../hooks';
export const DropdownUser = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { Logout, user } = useAuthStore();
  return (
    <>
        <button className='flex items-center gap-x-2 
        py-2 px-4 rounded-lg 
        hover:text-ligth-primary hover:bg-ligth-primary  
        hover:bg-opacity-5 
        dark:hover:bg-dark-secondary-900
        dark:hover:text-dark-primary
        transition-colors'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        >
            <img src={`${user.img ? user.img : 
        'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1708979352/Users/ayuzfuaaawlr1bk5dxca.png'}`} alt="user img" 
            className='w-6 h-6 object-cover rounded-full' />
            <span>{user.name}</span>
            <i className="fa-solid fa-angle-down"></i>
        </button>


        <div
        onBlur={() => setDropdownOpen(false)}
        className={`absolute mt-3 flex w-64 flex-col rounded-sm right-0 top-full border 
        bg-ligth-secondary-100 border-ligth-secondary-400 z-20
        dark:bg-dark-secondary-100 dark:border-dark-secondary-900
        ${ dropdownOpen === true ? 'block' : 'hidden' }
        transition-all duration-1000 ease-in-out`}>

            <ul className="flex flex-col gap-5 border-b dark:border-gray-600  
            px-6 py-6" >
                <li>
                    <Link to="/user/profile" className="flex items-center gap-x-2 
                    duration-300 ease-in-out
                    hover:text-ligth-primary
                    dark:hover:text-dark-primary
                    " >
                        <i className="fa-regular fa-user dark:text-dark-primary"></i>
                        <span>My Profile</span>
                    </Link>
                </li>
            </ul>

            <button className="flex items-center gap-2 px-6 py-6 
            duration-300 ease-in-out
            hover:text-ligth-primary
            dark:hover:text-dark-primary"
            onClick={()=>Logout()}> 
                <i className="fa-solid fa-right-from-bracket dark:text-dark-primary"></i>
                <span>Log Out</span>
            </button>
      
        </div>
    
    </>
  )
}
