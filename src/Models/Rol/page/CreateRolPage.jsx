import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem, Rol } from '../../'
import { useForm, useRolStore } from '../../../hooks'

const RolForm = {
    name: '',
  };
export const CreateRolPage = () => {

    const { startAddNewRol } = useRolStore();
    const { formState, onInputChange:onRolChange } = useForm(RolForm);

    const onSubmit = () => {
        startAddNewRol(formState);
    };

  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
        items-center justify-center dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-hidden
            flex flex-col w-3/4 h-1/3 
            shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-xl uppercase font-bold 
                    tracking-[5px] dark:text-white'>
                      Crear Rol
                    </h1>
                </div>
                <Rol initialForm={formState} onRolChange={onRolChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
