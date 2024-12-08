import React from 'react'
import { useForm, useMeasuresStore } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { Measures } from '../components/Measures';

const MeasureForm = {
  name: '',
  abbrev: '',
};

export const CreateMeasuresPage = () => {

  const { startAddNewMeasures } = useMeasuresStore();
  const { formState, onInputChange:onMeasureChange } = useForm(MeasureForm);

  const onSubmit = () => {
    startAddNewMeasures(formState);
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
                      Crear Medida
                    </h1>
                </div>
                <Measures initialForm={formState} onMeasureChange={onMeasureChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
