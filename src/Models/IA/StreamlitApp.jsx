import React from 'react'
import { LayoutPage } from '../../layout/LoggedIn'
import { NotificationSystem } from '../NotificationItem/NotificationSystem'

export const StreamlitApp = () => {
  return (
    <LayoutPage>
        <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
        items-center justify-center dark:bg-dark-secondary-900">
            <NotificationSystem/>
            <div className='rounded-xl overflow-hidden
            flex flex-col w-full h-full
            shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>
                <iframe src="http://localhost:8501" width="100%" height='100%' />
            </div>
        </section>
    </LayoutPage>
  )
}
