import React from 'react'

export const ProductItem = ({initialForm, onProductItemChange, onSubmit}) => {

    const onProductItemSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }

  return (
    <form onSubmit={onProductItemSubmit}>
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Stock <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
            <input type="number" 
            name="stock"
            placeholder='Stock'
            value={initialForm.stock}
            onChange={onProductItemChange}
            className="w-full px-4 py-2 pl-4
            pr-4 border rounded-md outline-none" />
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Stock Minimo <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
            <input type="number" 
            name="min_stock"
            placeholder='Stock Minimo'
            value={initialForm.min_stock}
            onChange={onProductItemChange}
            className="w-full px-4 py-2 pl-4
            pr-4 border rounded-md outline-none" />
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Precio <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
            <input type="number" 
            name="price"
            placeholder='Precio'
            value={initialForm.price}
            onChange={onProductItemChange}
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
