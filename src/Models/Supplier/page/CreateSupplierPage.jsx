import React from 'react'
import { useForm, useSupplierStore } from '../../../hooks';
import { Supplier } from '../components/Supplier';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { LayoutPage } from '../../../layout/LoggedIn';

const SupplierForm = {
  repre: '',
  ruc: '',
  email: '',
  address: '',
  phone: '',
};

export const CreateSupplierPage = () => {
  
  const { startAddNewSupplier } = useSupplierStore();
  const { formState, onInputChange:onSupplierChange } = useForm(SupplierForm);

  const onSubmit = () => {
    startAddNewSupplier(formState);
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
                      Crear Suppliere
                    </h1>
                </div>
                <Supplier initialForm={formState} onSupplierChange={onSupplierChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
