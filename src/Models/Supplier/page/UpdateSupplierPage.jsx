import React from 'react'
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { useAsync, useAxios, useForm, useSupplierStore } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { Supplier } from '../components/Supplier';

const SupplierForm = {
  repre: '',
  ruc: '',
  email: '',
  address: '',
  phone: '',
};

export const UpdateSupplierPage = () => {

  const { formState, onInputChange:onSupplierChange, setValue } = useForm(SupplierForm);
    const { startGetIdSupplier, startUpdateSupplier } = useSupplierStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()

    const adapterSupplier = (obj) => {
        setValue('repre', obj.repre);
        setValue('ruc', obj.ruc);
        setValue('address', obj.address);
        setValue('email', obj.email);
        setValue('phone', obj.phone);
    };
    const getData = async() => await callEndpoint(startGetIdSupplier(id))
    useAsync(getData, adapterSupplier, () => {}, [id], () => {return true})
    

    const onSubmit = () => {
      startUpdateSupplier(id, formState);
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
                      Editar Proveedor
                    </h1>
                </div>
                <Supplier initialForm={formState} onSupplierChange={onSupplierChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
