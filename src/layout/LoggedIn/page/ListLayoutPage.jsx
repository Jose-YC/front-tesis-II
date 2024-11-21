  import { Link } from 'react-router-dom';
  import { LayoutPage } from './LayoutPage';
  import { SearchPage } from '../components/Pagination/SearchPage';
  import { NotificationSystem } from '../../../Models/NotificationItem/NotificationSystem';

  export const ListLayoutPage = ({children, searchParams, to, models, handleInputChange }) => {
    return (
      <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
        items-center justify-center dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-auto
            flex flex-col w-3/4 shadow-2xl bg-ligth-secondary-100
            dark:bg-dark-secondary-100 p-8 transition-all duration-300 ease-in-out'>
                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-xl uppercase font-bold 
                    tracking-[5px] dark:text-white'>
                    {models} List
                    </h1>

                    <Link to={to}
                    className="font-medium py-2 px-4 rounded-md 
                    transition duration-150 ease-in-out 
                    focus:ring-2 focus:bg-ligth-primary 
                    bg-ligth-primary text-white bg-opacity-70
                    dark:bg-dark-primary">Create {models}</Link>
                </div>
                <SearchPage
                searchParams = {searchParams}
                handleInputChange={handleInputChange}/>
                        {children}
            </div>
          </section>
      </LayoutPage>
    )
  }
