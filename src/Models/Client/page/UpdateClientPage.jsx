import React from 'react'
import { useAsync, useAxios, useClientStore, useForm } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Client } from '../components/Client';

const ClientForm = {
  num_doc: '',
  name: '',
  type: '',
  email: '',
  phone: '',
  address: '',
};

export const UpdateClientPage = () => {

    const { formState, onInputChange:onClientChange, setValue } = useForm(ClientForm);
    const { startGetIdClient, startUpdateClient } = useClientStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()

    const adapterClient = (obj) => {
        setValue('num_doc', obj.num_doc);
        setValue('name', obj.name);
        setValue('type', obj.type);
        setValue('email', obj.email);
        setValue('phone', obj.phone);
        setValue('address', obj.address);
    };
    const getData = async() => await callEndpoint(startGetIdClient(id))
    useAsync(getData,adapterClient, () => {}, [id], () => {return true})
    

    const onSubmit = () => {
      startUpdateClient(id, formState);
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
                      Editar Cliente
                    </h1>
                </div>
                <Client initialForm={formState} onClientChange={onClientChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
