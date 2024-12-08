import React from 'react'
import { CartProduct } from '../components/CartProduct'
import {  usePaginateStore, useProductStore } from '../../../hooks'
import { SearchPage } from '../../../layout/LoggedIn/components/Pagination/SearchPage';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { LayoutPage, Paginate } from '../../../layout/LoggedIn';

export const ProductGrid = () => {

    const { startGetProduct, startGetSearchProduct } =  useProductStore(); 
    const { data, currentPage, totalPages, searchPage, 
            createPageURL, handleInputChange, generatePagination } =  usePaginateStore(startGetProduct, startGetSearchProduct);
    const allPages = generatePagination(currentPage, totalPages);

  return (
    <>

      <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-auto
            flex flex-col shadow-2xl bg-ligth-secondary-100
            dark:bg-dark-secondary-100 p-8 transition-all duration-300 ease-in-out'>
                
                <div>
                    <SearchPage
                    searchParams = {searchPage}
                    handleInputChange={handleInputChange}/>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
                   

                    {data && data.length > 0 ? (
                        data.map((product) => (
                        <CartProduct key={product.id} product={product} />
                        ))
                    ) : (
                        <div>No hay productos</div>
                    )}
                   
                </div>

                <div className='flex justify-center items-center'>     
                    <Paginate
                    allPages={allPages} 
                    createPageURL={createPageURL} 
                    currentPage={currentPage}
                    totalPages={totalPages}/> 
                </div>
                        
            </div>
          </section>
      </LayoutPage>
    </>
  )
}
