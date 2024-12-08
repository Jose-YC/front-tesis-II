import React, { useState } from 'react'
import { useAsync, useAxios, useClientStore, useForm, useSale, useSaleStore } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Sale } from '../components/Sale';
import { ventas } from '../../../seed/ventas';

const SaleForm = {
  name: '',
  client_id: '',
  type: '',
  type_payment: '',
};

export const CreateSalePage = () => {

    const [suggestions, setSuggestions] = useState([]);
    const { startGetSearchClient } = useClientStore();
    const { startAddNewSale } = useSaleStore();
    const { callEndpoint } = useAxios();

    const { product, DeleteProductVenta, ResetProductVenta, UpdateQuantityVenta, calculateTotals } = useSale();
    const { formState, onInputChange:onSaleChange, setValue } = useForm(SaleForm);
    const { subtotal, taxAmount, total } = calculateTotals()

    const adapterClient = obj => setSuggestions(obj.data.data);
    const getData = async() => await callEndpoint(startGetSearchClient(0, 0, formState.name));
    useAsync(getData, adapterClient, () => {}, [formState.name], () => {return true});

    const onSubmit = async () => {
        startAddNewSale({...formState, itemsVenta: product})
        ResetProductVenta()
    }; 

  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400
    dark:bg-dark-secondary-900 dark:text-white">
        <NotificationSystem/>
        <div className='rounded-xl overflow-y-auto
        shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
           <Sale 
           initialForm={{ ...formState, product, subtotal, taxAmount, total }} 
           onfunction = {{ DeleteProductVenta, UpdateQuantityVenta, setValue }} 
           onSaleChange={onSaleChange}
           suggestions={suggestions}
           onSubmit={onSubmit}/>
        </div>
    </section>
    </LayoutPage>
  )
}
