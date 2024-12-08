import React from 'react'

export const Product = ({initialForm, onProductChange}) => {
  return (
   <>
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Nombre <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
            <input type="text" 
            name="name"
            placeholder='Nombre'
            value={initialForm.name}
            onChange={onProductChange}
            className="w-full px-4 py-2 pl-4
            pr-4 border rounded-md outline-none" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Descripcion <span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                <textarea
                name="description"
                placeholder='Descripcion'
                value={initialForm.description}
                onChange={onProductChange}
                className="w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none" />
                </div>
        </div>
   </>
  )
}
