import { Link } from 'react-router-dom';

export const MenuLink = ({itemMenu}) => {
  return (
    <>
        {
          itemMenu.map((item, index) => (
              <Link key={index} to={item.to} className="flex items-center gap-4
              hover:text-ligth-primary duration-200 ease-in-out
              dark:hover:text-white
              dark:text-white
              dark:text-opacity-60
              dark:hover:bg-dark-secondary-900 
              transition-colors"> 
                {item.name}
              </Link>  
          ))
        }
    </>

  )
}
