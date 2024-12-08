import React, { useState } from 'react'
import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { useAsync, useAxios, useSaleStore } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { DetailsSales } from '../components/DetailsSales';

export const DetailsSalesPage = () => {
    const [sale, setSale] = useState({client:{}});        
    const { startGetIdDetailsSale } = useSaleStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()
  
    const adapter = obj => {setSale(obj); console.log(obj)};
    const getData = async() => await callEndpoint(startGetIdDetailsSale(id))
    useAsync(getData, adapter, () => {}, [id], () => {return true})
  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400
    dark:bg-dark-secondary-900 dark:text-white">
        <NotificationSystem/>
        <div className='rounded-xl overflow-y-auto
        shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
           <DetailsSales sale={sale}/>
        </div>
    </section>
    </LayoutPage>
  )
}
