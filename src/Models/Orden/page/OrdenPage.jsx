import React, { useState } from 'react'
import { Orden } from '../components/Orden'
import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { useAsync, useAxios, useForm, useOrden, useOrdenStore, useSupplierStore } from '../../../hooks'

const OrdenForm = {
  name: '',
  provedor_id: '',
};

export const OrdenPage = () => {

    const [suggestions, setSuggestions] = useState([]);
    const { startGetSearchSupplier } = useSupplierStore();
    const { startAddNewOrden } = useOrdenStore();
    const { callEndpoint } = useAxios();
    
    const { product, DeleteProductOrden, ResetProductOrden, UpdateQuantity, calculateTotals } = useOrden();
    const { formState, onInputChange:onOrdenChange, setValue } = useForm(OrdenForm);
    const { total } = calculateTotals();
    
    const adapterSupplier = obj => setSuggestions(obj.data.data);
    const getData = async() => await callEndpoint(startGetSearchSupplier(0, 0, formState.name));
    useAsync(getData, adapterSupplier, () => {}, [formState.name], () => {return true});
    

    const onSubmit = () => {
        startAddNewOrden({provedor_id: formState.provedor_id, itemsOrden: product})
        ResetProductOrden()
    }; 

  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400
    dark:bg-dark-secondary-900 dark:text-white">
        <NotificationSystem/>
        <div className='rounded-xl overflow-y-auto
        shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
            <Orden 
            initialForm={{ ...formState, product, total }} 
            onfunction = {{ DeleteProductOrden,  UpdateQuantity, setValue }} 
            onOrdenChange={onOrdenChange}
            suggestions={suggestions}
            onSubmit={onSubmit}/>
        </div>
    </section>
    </LayoutPage>
  )
}
