import React, { useState } from 'react'
import { useAsync, useAxios, useForm, useMeasuresStore } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { LayoutPage } from '../../../layout/LoggedIn';
import { Measures } from '../components/Measures';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';

const MeasureForm = {
    name: '',
    abbrev: '',
};

export const UpdateMeasurePage = () => {

    const { formState, onInputChange:onMeasureChange, setValue } = useForm(MeasureForm);
    const { startGetIdMeasures, startUpdateMeasures } = useMeasuresStore();
    const { callEndpoint } = useAxios();
    const { id } = useParams()

    const adapterMeasure = (obj) => {
        setValue('name', obj.name);
        setValue('abbrev', obj.abbrev);
    };
    const getData = async() => await callEndpoint(startGetIdMeasures(id))
    useAsync(getData,adapterMeasure, () => {}, [id], () => {return true})
    

    const onSubmit = () => {
        startUpdateMeasures(id, formState);
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
                      Editar Medida
                    </h1>
                </div>
                <Measures initialForm={formState} onMeasureChange={onMeasureChange  } onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
