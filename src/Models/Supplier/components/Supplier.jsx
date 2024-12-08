import React from 'react'

export const Supplier = ({ initialForm, onSupplierChange, onSubmit}) => {
  
  const onSupplierSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  
  return (
    <form className='mb-6 dark:text-black text-left' onSubmit={onSupplierSubmit}>
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Representante <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="text" 
          name="repre"
          placeholder='Nombre Representante'
          value={initialForm.repre}
          onChange={onSupplierChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">RUC <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="number" 
          name="ruc"
          placeholder='RUC'
          value={initialForm.ruc}
          onChange={onSupplierChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Email <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="email" 
          name="email"
          placeholder='Email'
          value={initialForm.email}
          onChange={onSupplierChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Direccion <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="text" 
          name="address"
          placeholder='Direccion'
          value={initialForm.address}
          onChange={onSupplierChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Numero de Celular <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="number" 
          name="phone"
          placeholder='Celular'
          value={initialForm.phone}
          onChange={onSupplierChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
        </div>
      </div>
      <button type="submit"
        className="uppercase font-bold text-sm
        w-full rounded-lg p-2
        bg-ligth-primary text-white bg-opacity-70
        dark:bg-dark-primary">Submit</button>
    </form>
  )
}
