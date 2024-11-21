import React from 'react'
import { UserProfile } from '../components/UserProfile'
import { UserPassword } from '../components/UserPassword'
import { LayoutPage } from '../../../layout/LoggedIn'
import { UserPhoto } from '../components/UserPhoto'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { useAuthStore } from '../../../hooks'

export const UserProfilePage = () => {
  const { user } = useAuthStore(); 
  return (
    
    <LayoutPage>
      <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
      flex-col dark:bg-dark-secondary-900">
        <NotificationSystem/>
        <div className=" p-8 rounded-xl mb-8
        bg-ligth-secondary-100 
        dark:bg-dark-secondary-100">
            <h1 className='text-xl text-gray-600 dark:text-gray-100/80'>Perfil</h1>
            <hr className='my-8 border-gray-400/30 dark:border-gray-500/50'/>
            <UserPhoto img={user.img} id={user.uid}/>
            <UserProfile user={user}/>
        </div>
        <div className=" p-8 rounded-xl
        bg-ligth-secondary-100 
        dark:bg-dark-secondary-100">
            <h1 className='text-xl text-gray-600 dark:text-gray-100/80'>Contraseña</h1>
            <hr className='my-8 border-gray-400/30 dark:border-gray-500/50'/>
            <UserPassword/>
        </div>
      </section>

    </LayoutPage>
    
  )
}
