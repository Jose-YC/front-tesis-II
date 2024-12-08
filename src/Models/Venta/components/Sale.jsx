import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../../Catalogo'
import { InputSearch } from '../../../layout/LoggedIn'

export const Sale = ({initialForm , onfunction, onSaleChange, suggestions, onSubmit}) => {

  const handleSet = (option) => {
    onfunction.setValue('name', option.name);
    onfunction.setValue('client_id', option.num_doc);
  }

  return (
       
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">   
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Artículos en tu venta</span>
            {
              initialForm.product.length > 0 &&(
                <Link to={'/product/catalogo'} className="text-sm font-medium text-ligth-primary dark:text-dark-primary transition-colors duration-200">
                  Continuar comprando
                </Link>
            )}
          </div>

          {
            initialForm.product.length > 0 ? (
            initialForm.product.map((product) => (
                <Cart 
                key={product.id} 
                product={product} 
                functions={{ UpdateQuantity: onfunction.UpdateQuantityVenta, DeleteProduct: onfunction.DeleteProductVenta }} />
            ))
            ) : (
              <Link to="/product/catalogo"
              className="text-blue-500 hover:text-blue-700">
                  Ver catálogo de productos
              </Link>
            )
           }
        </div>


        <div className="w-full lg:w-1/3">
          <div className="sticky top-8 rounded-xl p-6 shadow-lg border ">
            <h2 className="text-xl font-semibold mb-6">Resumen de la Orden</h2>

            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Documento<span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                  <select 
                  name='type'
                  value={initialForm.type}
                  onChange={onSaleChange}
                  className="w-full px-4 py-2 pl-4 pr-4 border rounded-md outline-none">
                      <option value="">Seleccione una Opcion</option>
                      <option value="BOLETA">Boleta</option>
                      <option value="FACTURA">Factura</option>
                      <option value="TICKET">Ticket</option>
                  </select>
                </div>
            </div>
            {(initialForm.type === "BOLETA" || initialForm.type === "FACTURA") && (
              <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                  <div className='w-full md:w-1/4'>
                      <p className="text-gray-600 dark:text-gray-300/90">Cliente <span className="text-red-500">*</span></p>
                  </div>
                  <div className="flex-1">
                    <InputSearch
                    name={'name'}
                    value={initialForm.name}
                    onChange={onSaleChange}
                    suggestions={suggestions}
                    className={"w-full px-4 py-2 pl-4 pr-4 border rounded-md outline-none"}
                    placeholder={"Buscar Cliente..."}
                    set={handleSet}/>
                  </div>
              </div>
            )}

            <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
                <div className='w-full md:w-1/4'>
                    <p className="text-gray-600 dark:text-gray-300/90">Documento<span className="text-red-500">*</span></p>
                </div>
                <div className="flex-1">
                  <select 
                  name='type_payment'
                  value={initialForm.type_payment}
                  onChange={onSaleChange}
                  className="w-full px-4 py-2 pl-4 pr-4 border rounded-md outline-none">
                      <option value="">Seleccione un metodo de pago</option>
                      <option value="EFECTIVO">Efectivo</option>
                      <option value="CREDITO">Credito</option>
                      <option value="DEBITO">Debito</option>
                      <option value="TRANSFERENCIA">Transferencia</option>
                  </select>
                </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <p className="text-gray-400">Número de Productos</p>
                <p className="font-medium">{initialForm.product.length}</p>
              </div>
              
              <div className="flex justify-between text-sm">
                <p className="text-gray-400">Subtotal</p>
                <p className="font-medium">S/. {initialForm.subtotal}</p>
              </div>
              
              <div className="flex justify-between text-sm">
                <p className="text-gray-400">Impuestos (16%)</p>
                <p className="font-medium">S/. {initialForm.taxAmount}</p>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-base font-medium ">Total:</p>
                  <p className="text-2xl font-bold ">S/. {initialForm.total}</p>
                </div>
              </div>
            </div>

            <button onClick={onSubmit}
            className="mt-8 w-full rounded-full bg-[#FF7F6F] 
            px-4 py-3 text-sm font-semibold  shadow-md hover:bg-[#ff9485] 
            focus:outline-none focus:ring-2 focus:ring-[#FF7F6F] focus:ring-offset-2 
            focus:ring-offset-[#252525] transition-colors duration-200">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
