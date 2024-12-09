import React, { useState } from 'react'
import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { useAsync, useAxios, useOrdenStore } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { DetailsOrden } from '../components/DetailsOrden';

export const DetailsOrdenPage = () => {
    const [orden, setOrden] = useState({proveedor:{}});        
    const { startGetIdDetailsOrden } = useOrdenStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()
  
    const adapter = obj => {setOrden(obj);};
    const getData = async() => await callEndpoint(startGetIdDetailsOrden(id))
    useAsync(getData, adapter, () => {}, [id], () => {return true})
  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400
    dark:bg-dark-secondary-900 dark:text-white">
        <NotificationSystem/>
        <div className='rounded-xl overflow-y-auto
        shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
           <DetailsOrden orden={orden}/>
        </div>
    </section>
    </LayoutPage>
  )
}
