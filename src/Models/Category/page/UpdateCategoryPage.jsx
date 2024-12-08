import React, { useState } from 'react'
import { useAsync, useAxios, useCategoryStore, useForm } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { Category } from '../components/Category';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';

const categoryForm = {
    name: '',
    description: '',
    parent_id: '',
}

export const UpdateCategoryPage = () => {

  const [categorys, setCategorys] = useState([]);
  const {formState, onInputChange:onCategoryChange, setValue} = useForm(categoryForm);
  const { startGetCategory, startGetIdCategory, startUpdateCategory } = useCategoryStore();
  const { callEndpoint } = useAxios();
  const { id } = useParams();

  const adapterCategory = (obj) => {
    console.log(obj);
    setValue('name', obj.name);
    setValue('description', obj.description);
    setValue('parent_id', obj.parent_id);
};
  const getDataCategory = async() => await callEndpoint(startGetIdCategory(id))
  useAsync(getDataCategory,adapterCategory, () => {}, [id], () => {return true})

  const adapter = obj => setCategorys(obj.data.data);
  const getData = async() => await callEndpoint(startGetCategory(0,0))
  useAsync(getData,adapter, () => {}, [], () => {return true})
  

  const onSubmit = () => {
    startUpdateCategory({...formState, parent_id: !formState.parent_id ? null : parseInt(formState.parent_id)}, id);
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
                        Editar Categoria
                    </h1>
                </div>
                <Category initialForm={{ ...formState, categorys }} onCategoryChange={onCategoryChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
