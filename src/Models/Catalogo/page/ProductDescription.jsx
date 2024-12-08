import React, { useState } from 'react'
import { useAsync, useAxios, useProductStore } from '../../../hooks'
import { useParams } from 'react-router-dom';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { CartProductDescription } from '../components/CartProductDescription';

export const ProductDescription = () => {
    const [product, setProduct] = useState();
    const { startGetIdProductDetails } = useProductStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()

    const adapterProduct = (obj) => setProduct(obj);
    const getData = async() => await callEndpoint(startGetIdProductDetails(id))
    useAsync(getData,adapterProduct, () => {}, [id], () => {return true})

  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400
        dark:bg-dark-secondary-900 dark:text-white">
            <NotificationSystem/>
            <div className='rounded-xl overflow-y-auto
            shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <CartProductDescription product={product} />
                
            </div>
        </section>
    </LayoutPage>
  )
}
