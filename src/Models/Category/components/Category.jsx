import React from 'react'

export const Category = ({ initialForm, onCategoryChange, onSubmit}) => {
  const onUserSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  return (
    <form className='mb-6 dark:text-black' onSubmit={onUserSubmit}>
      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
              <p className="text-gray-600 dark:text-gray-300/90">Nombre <span className="text-red-500">*</span></p>
          </div>
          <div className="flex-1">
            <input type="text" 
            name="name"
            placeholder="Nombre"
            value={initialForm.name}
            onChange={onCategoryChange}
            className="w-full px-4 py-2 pl-4
            pr-4 border rounded-md outline-none" />
          </div>
      </div>

      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Categoria <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
              <select 
              name='parent_id'
              value={initialForm.parent_id}
              onChange={onCategoryChange}
              className="w-full px-3 py-2 
              border rounded-md outline-none">
                <option value="">--- Root ----</option>
                {initialForm.categorys.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
              </select>
            </div>
        </div>

      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
          <div className='w-full md:w-1/4'>
              <p className="text-gray-600 dark:text-gray-300/90">Descripción <span className="text-red-500">*</span></p>
          </div>
          <div className="flex-1">
            <textarea
            name="description"
            placeholder='Descripcion'
            value={initialForm.description}
            onChange={onCategoryChange}
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
