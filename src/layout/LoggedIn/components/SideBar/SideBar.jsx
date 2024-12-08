import { useState } from "react";

import { DarkModeSwitcher } from './Components/DarkModeSwitcher'
import { Menu } from "./MenuLink/Menu";
import { Logo } from "./Logo";

export const SideBar = () => {

  const [openMenu, setOpenMenu] = useState(false);


  return (
    <>
    <div className={`overflow-y-scroll border-r
    fixed h-full top-0 p-4 
    xl:h-[100vh] w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-auto
    xl:static flex flex-col justify-between z-50 
    bg-ligth-secondary-100
    dark:border-r-dark-secondary-100
    dark:bg-dark-secondary-100 dark:text-white 
    
    ${openMenu ? "left-0" : "-left-full"} transition-all`}>
      <div>
        <Logo/>
        <Menu/>
      </div>
      <nav className="flex justify-center">
        <DarkModeSwitcher/>
      </nav>
    </div>

    <button className="fixed bottom-4 right-5 py-2 px-3 
    rounded-full
    dark:bg-dark-primary dark:text-black z-50"
    onClick={() => setOpenMenu(!openMenu)}>
      {openMenu ?  <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars-staggered"></i>} 
     
    </button>

    </>
  )
}
