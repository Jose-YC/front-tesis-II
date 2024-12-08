import { useAsync, useAxios, useForm, useRolStore, useUserStore } from '../../../hooks';
import { LayoutPage } from '../../../layout/LoggedIn'
import { User } from '../components/User'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const userForm = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    rolName: '',
    password: '',
}

export const UpdateUserPage = () => {

    const [rol, setRol] = useState([]);
    const { startUpdateUser, startGetIdUser} =  useUserStore();
    const { startGetRol } = useRolStore();
    const {formState, onInputChange:onUserChange, setValue} = useForm(userForm);
    const { callEndpoint } = useAxios();
    const { id } = useParams();

  
    const adapterRol = obj => setRol(obj.data.data);
    const getData = async() => await callEndpoint(startGetRol(0,0))
    useAsync(getData,adapterRol, () => {}, [], () => {return true})


    const adapterUser = obj => {
        setValue('email',obj.email); 
        setValue('name',obj.name); 
        setValue('lastname',obj.lastname); 
        setValue('phone',obj.phone); 
        setValue('rolName',obj.rolName); 
        console.log(obj)
    };
    const getDataUser = async() => await callEndpoint(startGetIdUser(id))
    useAsync(getDataUser,adapterUser, () => {}, [id], () => {return true})

    const onSubmit = () => {
        console.log(formState)
        startUpdateUser(formState, id)
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
                        Editar Usuario
                    </h1>
                </div>
                <User initialForm={{ ...formState, rol }} onUserChange={onUserChange} onSubmit={onSubmit}/>
            </div>
        </section>
    </LayoutPage>
  )
}
