import React from 'react'
import { Product } from './Product';
import { InputSearch, Tag } from '../../../layout/LoggedIn';
import { CarruselProduct } from '../../Catalogo';

export const ProductDetails = ({ initialForm, onChange, onfunction, onSubmit}) => {

    const onProductSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }

    const handleSet = (option) => {
      onfunction.setValueMeasure('measures_name', option.name);
      onfunction.setValueMeasure('measures_id', option.id);
    }

    const handleSetCategory = (option) => {
      if (!initialForm.tags.some(tag => tag.category_id === option.id)) {
        onfunction.addArrayCategory({name: option.name, category_id: option.id});
        onfunction.setValueProduct('name_category', '');
      }
      onfunction.setValueProduct('name_category', '');
    }

    const handleRemove= (option) => {
      onfunction.removeArrayCategory( option, 'category_id')
    }

    const handleFileChange = (event) => {
      const files = event.target.files;
      if (files){ onfunction.addArrayImg(event.target.files[0])}
    }

  return (
    <form className=' dark:text-black' onSubmit={onProductSubmit}>
        
        <div className={`flex flex-col md:flex-row ${initialForm.img && initialForm.img.length > 0 ? 'md:space-x-8' : ''}`}>
          <div className={`w-full ${initialForm.img && initialForm.img.length > 0 ? 'md:w-1/2' : ''}  col-span-1 px-5 space-y-2`}>
            <Product initialForm={initialForm} onProductChange={onChange.onOrdenChangeProduct}/>
            <div className='flex flex-col md:flex-row md:items-center'>  
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Categoria <span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                  <Tag 
                  name={'name_category'} 
                  value={initialForm.name_category} 
                  onChange={onChange.onOrdenChangeProduct}
                  tags={initialForm.tags}
                  suggestions={initialForm.categorys}
                  set={handleSetCategory}
                  remove={handleRemove}/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Imagen <span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                <input type="file" 
                name="url"
                placeholder='Imagen'
                onChange={handleFileChange}
                className="w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none" />
                </div>
            </div>
            <div className="py-4 border-t border-gray-200 grid grid-cols-1 gap-4 xl:grid-cols-2">
                <div className='flex flex-col md:flex-row md:items-center'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Medida <span className="text-red-500">*</span></p>
                  </div>
                  <div className="flex-1">
                    <InputSearch 
                    name={'measures_name'} 
                    value={initialForm.measures_name}
                    onChange={onChange.onOrdenChangeMeasure}
                    suggestions={initialForm.suggestions}
                    set={handleSet}
                    placeholder={'Buscar Medida...'}
                    className={"w-full px-4 py-2 pl-4 pr-4 border rounded-md outline-none"}/>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='w-full md:w-1/4'>
                        <p className="text-gray-600 dark:text-gray-300/90">Stock <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                    <input type="number" 
                    name="stock"
                    placeholder='Stock'
                    value={initialForm.stock}
                    onChange={onChange.onOrdenChangeMeasure}
                    className="w-full px-4 py-2 pl-4
                    pr-4 border rounded-md outline-none" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Stock Minimo <span className="text-red-500">*</span></p>
                  </div>
                  <div className="flex-1">
                  <input type="number" 
                  name="min_stock"
                  placeholder='Stock Minimo'
                  value={initialForm.min_stock}
                  onChange={onChange.onOrdenChangeMeasure}
                  className="w-full px-4 py-2 pl-4
                  pr-4 border rounded-md outline-none" />
                </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Precio <span className="text-red-500">*</span></p>
                  </div>
                  <div className="flex-1">
                  <input type="number" 
                  name="price"
                  placeholder='Precio'
                  value={initialForm.price}
                  onChange={onChange.onOrdenChangeMeasure}
                  className="w-full px-4 py-2 pl-4
                  pr-4 border rounded-md outline-none" />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='w-full md:w-1/4'>
                        <p className="text-gray-600 dark:text-gray-300/90">Ganancia <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                    <input type="number" 
                    name="income"
                    placeholder='Ganancia'
                    value={initialForm.income}
                    onChange={onChange.onOrdenChangeMeasure}
                    className="w-full px-4 py-2 pl-4
                    pr-4 border rounded-md outline-none" />
                    </div>
                </div>

                <button 
                type="button"
                onClick={onfunction.onSubmitMeasure}
                className="uppercase font-bold text-sm 
                rounded-lg p-2 bg-ligth-primary text-white 
                bg-opacity-70 dark:bg-dark-primary">
                  Agregar
                </button>
                
                
            </div>
            <div className="py-4 border-t border-gray-200 overflow-x-auto">
              <h3 className="font-semibold mb-2">Medidas en Venta:</h3>
              <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                        <th scope="col" 
                        className="px-6 py-3 text-left text-xs font-medium 
                        text-gray-500 uppercase tracking-wider">
                            Medida
                        </th>
                        <th scope="col" 
                        className="px-6 py-3 text-left text-xs font-medium 
                        text-gray-500 uppercase tracking-wider">
                            Stock
                        </th>
                        <th scope="col" 
                        className="px-6 py-3 text-left text-xs font-medium 
                        text-gray-500 uppercase tracking-wider">
                            Stock Minimo
                        </th>
                        <th scope="col" 
                        className="px-6 py-3 text-left text-xs font-medium 
                        text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th scope="col" 
                        className="px-6 py-3 text-left text-xs font-medium 
                        text-gray-500 uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                  {initialForm.measures && initialForm.measures.length > 0 ? (
                    initialForm.measures.map((variant) => (
                      <tr key={variant.measures_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {variant.measures_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {variant.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {variant.min_stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          S/. {variant.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div onClick={() => onfunction.removeArrayMeadure(variant.measures_id, 'measures_id')} 
                          className="text-ligth-primary hover:text-[#0056b3] 
                          dark:text-[#EE6C4D] dark:hover:text-[#e85a3a]">
                              <i className="fa-regular fa-trash-can"/>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : null}

                  </tbody>
              </table>
            </div>
          </div>
          {initialForm.img && initialForm.img.length > 0 && <CarruselProduct images={initialForm.img} />}
        </div>
        <div className="flex justify-end">
          <input type="submit"
          className="rounded-lg py-2 px-4
          bg-ligth-primary/70 text-white
          dark:bg-dark-primary/70 transition-colors" />
        </div>
    </form>
  )
}
