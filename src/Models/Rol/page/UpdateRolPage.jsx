import { useEffect, useState } from 'react';
import { useAsync, useAxios, useForm, useRolStore } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Rol } from '../components/Rol'
import { useParams } from 'react-router-dom';

const RolForm = {
    name: '',
  };

export const UpdateRolPage = () => {

  const { formState, onInputChange:onRolChange, setValue } = useForm(RolForm);
  const { startGetIdRol, startUpdateRol } = useRolStore();
  const { callEndpoint } = useAxios();
  const { id } = useParams();

  const adapterRol = obj => setValue('name', obj.name);
  const getData = async() => await callEndpoint(startGetIdRol(id))
  useAsync(getData,adapterRol, () => {}, [id], () => {return true})
  

  const onSubmit = () => {
    startUpdateRol(id, formState);
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
                      Editar Rol
                    </h1>
                </div>
                <Rol initialForm={formState} onRolChange={onRolChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
