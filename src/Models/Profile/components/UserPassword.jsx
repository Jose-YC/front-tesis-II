import React from 'react'

export const UserPassword = () => {
  return (
    <form action="">

    <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
      <div className='w-full md:w-1/4'>
        <p className="text-gray-600 dark:text-gray-300/90"> Current Password <span className="text-red-500">*</span></p>
      </div>
      <div className="w-1/4">
        <input type="password" 
        className="w-full py-1.5 px-4 rounded-lg outline-none
        bg-opacity-65 bg-ligth-secondary-400
        dark:bg-white dark:text-black border-transparent" />
      </div>
    </div>

    <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
      <div className='w-full md:w-1/4'>
        <p className="text-gray-600 dark:text-gray-300/90"> New Password <span className="text-red-500">*</span></p>
      </div>
      <div className="w-1/4">
        <input type="password" 
        className="w-full py-1.5 px-4 rounded-lg outline-none
        bg-opacity-65 bg-ligth-secondary-400
        dark:bg-white dark:text-black border-transparent" />
      </div>
    </div>

    <hr className='my-8 border-gray-400/30 dark:border-gray-500/50'/>

    <div className="flex justify-end">
      <input type="submit" placeholder="SAVE" 
      className="rounded-lg py-2 px-4
      bg-ligth-primary/70 text-white
      dark:bg-dark-primary/70 transition-colors" />
    </div>
    

  </form>
  )
}
