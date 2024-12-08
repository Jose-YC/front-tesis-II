import React from 'react'
import { QuantitySelector } from './QuantitySelector'

export const Cart = ({ product = {}, functions }) => {
  return (
    <div className="rounded-xl p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl border">
        <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={product.url}
            alt={product.name}
            className="h-32 w-32 rounded-lg object-cover shadow-md" />
            <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{product.name_measures}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-full px-2 py-1">
                    <QuantitySelector quantity={product.quantity} onQuantityChanged={quantity => functions.UpdateQuantity(product, quantity)}/>
                </div>
                <button onClick={() => functions.DeleteProduct(product.id)}
                className="text-sm font-medium transition-colors duration-200">
                    Eliminar
                </button>
                </div>
            </div>
            <div className="text-right mt-4 sm:mt-0">
                <p className="text-lg font-semibold">S/. {product.price}</p>
            </div>
        </div>
    </div>

  )
}
