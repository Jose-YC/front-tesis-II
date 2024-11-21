import { DarkModeSwitcher } from '../../LoggedIn/components/SideBar/Components/DarkModeSwitcher';
import { itemMenu, MenuLink } from '../';

export const Header = () => {
  return (
   <header className='h-[9vh] p-6 border-b
   flex items-center justify-end
   dark:border-b-dark-secondary-900
   dark:bg-dark-secondary-100'> 
    <nav className='relative flex items-center gap-x-4'>

      <MenuLink itemMenu={itemMenu}/>
      <DarkModeSwitcher/>
    </nav>     

   </header>
  )
}
