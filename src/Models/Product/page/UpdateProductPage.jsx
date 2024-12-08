import React from 'react'
import { useAsync, useAxios, useForm, useProductStore } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Product } from '../components/Product';

const ProductForm = {
    name: '',
    description: '',
  };


export const UpdateProductPage = () => {

    const { formState, onInputChange:onProductChange, setValue } = useForm(ProductForm);
    const { startGetIdProduct, startUpdateProduct } = useProductStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()
  
    const adapterProduct = (obj) => {
        console.log(obj);
        setValue('description', obj.description);
        setValue('name', obj.name);
    };
    const getData = async() => await callEndpoint(startGetIdProduct(id))
    useAsync(getData,adapterProduct, () => {}, [id], () => {return true})
    
  

    const onProductSubmit = (event) => {
        event.preventDefault();
        startUpdateProduct(id, formState);
    }

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
                  Editar Producto
                </h1>
            </div>
            <form onSubmit={onProductSubmit}>
                <Product initialForm={formState} onProductChange={onProductChange}/>
                <button type="submit"
                className="uppercase font-bold text-sm
                w-full rounded-lg p-2
                bg-ligth-primary text-white bg-opacity-70
                dark:bg-dark-primary">Submit</button>
            </form>
        </div>
    </section>
</LayoutPage>
  )
}
