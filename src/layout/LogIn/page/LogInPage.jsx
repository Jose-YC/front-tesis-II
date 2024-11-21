import React from 'react'
import { Header } from '../'
import { NotificationSystem } from '../../../Models/NotificationItem/NotificationSystem'

export const LogInPage = ({children}) => {
  return (
    <>
    <div className="min-h-screen grid grid-cols-1">
      <div className="col-span-1 dark:bg-dark-secondary-900 dark:text-white">
          <Header/>
          <div className='h-[91vh] relative w-[100vw] flex items-center 
          justify-center flex-col transition-colors
          bg-ligth-secondary-400
          dark:bg-dark-secondary-900
          '>
             <NotificationSystem/>
            {children}
          </div>
      </div>
    </div>
    
    </>
  )
}
