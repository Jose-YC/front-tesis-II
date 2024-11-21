import { useState } from 'react'

export const SubLinkSidebar = ({menu, children}) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const handleClik = () => setShowSubmenu((value) => !value);
  return (
    <li onClick={handleClik}>
        <button to={'/'} 
        className="flex w-full justify-between py-2 px-4 rounded-lg  
        hover:text-ligth-primary 
        hover:bg-ligth-primary  
        hover:bg-opacity-5 duration-200 ease-in-out
        text-gray-500
        dark:hover:text-white
        dark:text-white
        dark:text-opacity-60
        dark:hover:bg-dark-secondary-900 
        transition-colors"
        > 
              <span className="flex gap-4 items-center">
                <i className={`${menu.icon} text-ligth-primary text-opacity-70 dark:text-dark-primary`}></i>
                {menu.name}
              </span>
              <i className= {`fa-solid fa-angle-right mt-1 ${
              showSubmenu && "rotate-90"
            } transition-all`}></i>
        </button>  

        <ul 
        onBlur={()=>setShowSubmenu(true)}
        onFocus={()=>setShowSubmenu(false)}
        className={` ${ showSubmenu ? "" : "hidden" } transition-all`}>
              {children}
        </ul>
    </li>
  )
}

