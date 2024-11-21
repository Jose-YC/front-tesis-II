import { LayoutPage } from '../../../layout/LoggedIn'
import { User } from '../components/User'
import { useForm, useRolStore, useUserStore } from '../../../hooks';
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';

const userForm = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    rolName: '',
}
export const CreateUserPage = () => {
    const { startAddNewUser} =  useUserStore();
    const { startGetRol } = useRolStore();
    const {formState, onInputChange:onUserChange} = useForm(userForm);

    const onSubmit = () => {
        startAddNewUser(formState)
    }

  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
        items-center justify-center dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-hidden
            flex flex-col w-3/4 h-3/4 
            shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-xl uppercase font-bold 
                    tracking-[5px] dark:text-white'>
                        Crear Usuario
                    </h1>
                </div>
                <User initialForm={formState} onUserChange={onUserChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
