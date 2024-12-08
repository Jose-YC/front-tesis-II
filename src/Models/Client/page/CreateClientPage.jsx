import React from 'react'
import { useClientStore, useForm } from '../../../hooks';
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

export const CreateClientPage = () => {

  const { startAddNewClient } = useClientStore();
  const { formState, onInputChange:onClientChange } = useForm(ClientForm);

  const onSubmit = () => {
    startAddNewClient(formState);
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
                      Crear Cliente
                    </h1>
                </div>
                <Client initialForm={formState} onClientChange={onClientChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
