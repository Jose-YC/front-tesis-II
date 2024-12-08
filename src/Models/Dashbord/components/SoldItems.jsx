import React from 'react'

export const SoldItems = ({total=0}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-gray-600">Productos Vendidos en el Mes</h2>
        {/* <ShoppingBag className="h-4 w-4 text-gray-400" /> */}
        </div>
        <div className="text-2xl font-bold text-gray-800">{total}</div>
    </div>
  )
}
