import React from 'react'

export const Client = ({ initialForm, onClientChange, onSubmit}) => {

  const onClientSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  

  return (
    <form className='mb-6 dark:text-black text-left' onSubmit={onClientSubmit}>
       <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Tipo<span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                  <select 
                  name='type'
                  value={initialForm.type}
                  onChange={onClientChange}
                  className="w-full px-4 py-2 pl-4 pr-4 border rounded-md outline-none">
                      <option value="">Seleccione una Opcion</option>
                      <option value="NATURAL">Natural</option>
                      <option value="JURIDICO">Juridico</option>
                  </select>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90"> {initialForm.type  === 'NATURAL' ? 'DNI' : 'RUC' } <span className="text-red-500">*</span></p>
                  </div>
              <div className="flex-1">
                <input type="number" 
                name="num_doc"
                placeholder='Numero de Documento'
                value={initialForm.num_doc}
                onChange={onClientChange}
                className="w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none" />
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Nombre<span className="text-red-500">*</span></p>
                  </div>
                  <div className="flex-1">
                    <input type="text" 
                    name="name"
                    placeholder='Nombre'
                    value={initialForm.name}
                    onChange={onClientChange}
                    className="w-full px-4 py-2 pl-4
                    pr-4 border rounded-md outline-none" />
                  </div>
            </div>
      
            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Email</p>
                  </div>
              <div className="flex-1">
                <input type="email" 
                name="email"
                placeholder='Email'
                value={initialForm.email}
                onChange={onClientChange}
                className="w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none" />
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
              <div className='w-full md:w-1/4'>
                  <p className="text-gray-600 dark:text-gray-300/90">Celular</p>
              </div>
              <div className="flex-1">
                  <input type="number" 
                  className='w-full px-4 py-2 pl-4
                  pr-4 border rounded-md outline-none' 
                  placeholder='Celular'
                  name='phone'
                  value={initialForm.phone}
                  onChange={onClientChange}/>
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Direccion</p>
                </div>
                <div className="flex-1">
                  <textarea
                  name="address"
                  placeholder='Direccion'
                  value={initialForm.address}
                  onChange={onClientChange}
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
