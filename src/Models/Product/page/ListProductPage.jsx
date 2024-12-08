import React from 'react'
import { usePaginateStore, useProductStore } from '../../../hooks';
import { LayoutPage, Paginate } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { SearchPage } from '../../../layout/LoggedIn/components/Pagination/SearchPage';
import { ListProduct } from '../components/ListProduct';
import { Link } from 'react-router-dom';

export const ListProductPage = () => {

    const { startGetProductDetails, startGetSearchProductDetails, DeleteProduct } =  useProductStore(); 
    const { data, currentPage, totalPages, searchPage, 
            createPageURL, handleInputChange, generatePagination } =  usePaginateStore(startGetProductDetails, startGetSearchProductDetails);
    const allPages = generatePagination(currentPage, totalPages);

  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
     justify-center dark:bg-dark-secondary-900">
        <NotificationSystem/>
        <div className='rounded-xl overflow-auto
        flex flex-col w-3/4 shadow-2xl bg-ligth-secondary-100
        dark:bg-dark-secondary-100 p-8 transition-all duration-300 ease-in-out'>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-xl uppercase font-bold 
                tracking-[5px] dark:text-white'>
                    Listar Producto
                </h1>

                <Link to={'/product/create'}
                className="font-medium py-2 px-4 rounded-md 
                transition duration-150 ease-in-out 
                focus:ring-2 focus:bg-ligth-primary 
                bg-ligth-primary text-white bg-opacity-70
                dark:bg-dark-primary">Crear Producto</Link>
            </div>
            <SearchPage
            searchParams = {searchPage}
            handleInputChange={handleInputChange}/>

            <ListProduct data={data} DeleteProduct={DeleteProduct} />
    
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
