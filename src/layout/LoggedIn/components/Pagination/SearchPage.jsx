import React from 'react'

export const SearchPage = ({searchParams='', handleInputChange}) => {

    const handleInputSearchChange = (event) => {
        handleInputChange(event.target.value)
    }
    
  return (
    <div className='relative mb-4'>
        <i className="fa-solid fa-magnifying-glass
        absolute top-1/2 -translate-y-1/2 
        left-3 text-ligth-primary text-opacity-50
        dark:text-dark-primary"/>

        <input type="email" 
        className='w-full px-4 
        py-2 pl-10 pr-4
        border rounded-md outline-none' 
        placeholder='Search...'
        onChange={handleInputSearchChange}
        defaultValue={searchParams}/>
    </div>
  )
}
