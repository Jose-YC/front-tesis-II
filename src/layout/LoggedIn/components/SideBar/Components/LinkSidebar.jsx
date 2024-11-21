import { Link } from 'react-router-dom'

export const LinkSidebar = ({menu}) => {
  return (
          <li className='text-gray-500' >
                  {

                    (menu.type === 'singleLink') ? 
                            (
                            
                                <Link to={menu.to} className="flex items-center gap-4 py-2 px-4 rounded-lg
                               hover:text-ligth-primary hover:bg-ligth-primary  
                               hover:bg-opacity-5 duration-200 ease-in-out
                               dark:hover:text-white
                               dark:text-white
                               dark:text-opacity-60
                               dark:hover:bg-dark-secondary-900 
                                transition-colors"> 
                                <i className={`${menu.icon} text-ligth-primary text-opacity-70 dark:text-dark-primary`}></i>
                                  {menu.name} 
                                </Link>  
                            
                                
                            ) 
                            : (
                            
                              <Link to={menu.to} 
                              className="py-2 px-4 border-l ml-6 block 
                                relative before:w-3 before:h-3
                                before:absolute before:rounded-full before:-left-1.5 before:top-1/2
                                before:-translate-y-1/2 before:border-4
                                border-ligth-primary border-opacity-30
                                
                                hover:text-ligth-primary
                                hover:text-opacity-70
                                before:border-ligth-secondary-100
                                hover:before:bg-ligth-primary 
                                before:bg-ligth-primary
                                before:bg-opacity-70

                                dark:before:border-dark-secondary-100 
                                dark:border-gray-500 
                                dark:hover:text-dark-primary
                                dark:hover:before:bg-dark-primary
                                dark:hover:text-opacity-80
                                dark:before:bg-dark-primary   
                                transition-colors"> {menu.name} </Link>
                            
                            )       
                  }
          </li>
     
  )
}
