import React from 'react'
import { LayoutPage, Paginate } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { SearchPage } from '../../../layout/LoggedIn/components/Pagination/SearchPage'
import { ListOrden } from '../../Orden/components/ListOrden'
import { useMeasuresStore, usePaginateStore } from '../../../hooks'
import { ListMeasures } from '../components/ListMeasures'
import { Link } from 'react-router-dom'

export const ListMeasuresPage = () => {

    const { startGetMeasures, startGetSearchMeasures, DeleteMeasures } =  useMeasuresStore(); 
    const { data, currentPage, totalPages, searchPage, 
            createPageURL, handleInputChange, generatePagination } =  usePaginateStore(startGetMeasures, startGetSearchMeasures);
    const allPages = generatePagination(currentPage, totalPages);


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
                    Listar Medidas
                </h1>

                <Link to={'/measure/create'}
                className="font-medium py-2 px-4 rounded-md 
                transition duration-150 ease-in-out 
                focus:ring-2 focus:bg-ligth-primary 
                bg-ligth-primary text-white bg-opacity-70
                dark:bg-dark-primary">Crear Medida</Link>
            </div>
            <SearchPage
            searchParams = {searchPage}
            handleInputChange={handleInputChange}/>

            <ListMeasures data={data} DeleteMeasures={DeleteMeasures}/>

            <Paginate
            allPages={allPages} 
            createPageURL={createPageURL} 
            currentPage={currentPage}
            totalPages={totalPages}/> 

        </div>
      </section>
  </LayoutPage>
  )
}
