import React, { useState } from 'react'
import { useAsync, useAxios, useCategoryStore, useForm } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Category } from '../components/Category';

const categoryForm = {
  name: '',
  description: '',
  parent_id: '',
}

export const CreateCategoryPage = () => {
    const [categorys, setCategorys] = useState([]);
    const { startGetCategory, startAddNewCategory } = useCategoryStore();
    const {formState, onInputChange:onCategoryChange} = useForm(categoryForm);
    const { callEndpoint } = useAxios();
  
    const adapterCategory = obj => setCategorys(obj.data.data);
    const getData = async() => await callEndpoint(startGetCategory(0,0))
    useAsync(getData,adapterCategory, () => {}, [], () => {return true})

    const onSubmit = () => {
        console.log(formState)
        startAddNewCategory({...formState, parent_id: !formState.parent_id ? null : parseInt(formState.parent_id)})
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
                        Crear Categoria
                    </h1>
                </div>
                <Category initialForm={{ ...formState, categorys }} onCategoryChange={onCategoryChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
