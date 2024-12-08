import React from 'react'
import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { ProductItem } from '../components/ProductItem'
import { useAsync, useAxios, useDetailsProductMeasuresStore, useForm } from '../../../hooks'
import { useParams } from 'react-router-dom'

const ProductItemForm = {
    stock: '',
    min_stock: '',
    price: '',
};


export const UpdateProductItemPage = () => {
    const { formState, onInputChange:onProductItemChange, setValue } = useForm(ProductItemForm);
    const { startGetIdDetailsPM, startUpdateDetailsPM } = useDetailsProductMeasuresStore();
    const { callEndpoint } = useAxios();
    const { product_id, measures_id } = useParams()
  
    const adapterProductItem = (obj) =>{ 
        setValue('stock', obj.stock);
        setValue('min_stock', obj.min_stock);
        setValue('price', obj.price);
    };
    
    const getData = async() => await callEndpoint(startGetIdDetailsPM(product_id, measures_id))
    useAsync(getData, adapterProductItem, () => {}, [measures_id, product_id], () => {return true})
    
  
    const onSubmit = () => {
        startUpdateDetailsPM(product_id, measures_id, {
                stock: parseInt(formState.stock), 
                min_stock: parseInt(formState.min_stock), 
                price: parseFloat(formState.price)
        });
    };
  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
        items-center justify-center dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-hidden
            flex flex-col w-3/4
            shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-xl uppercase font-bold 
                    tracking-[5px] dark:text-white'>
                      Editar Medidda del Producto
                    </h1>
                </div>
                <ProductItem initialForm={formState} onProductItemChange={onProductItemChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
