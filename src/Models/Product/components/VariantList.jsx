import React from 'react'
import { Link } from 'react-router-dom'

export const VariantList = ({variants=[]}) => {
  return (
    <div className="bg-white p-4 border-t border-gray-200">
        <h3 className="font-semibold mb-2">Medidas en Venta:</h3>
        <Link>
        </Link>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
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
            <tbody className="bg-white divide-y divide-gray-200">
            {variants.map((variant) => (
                <tr key={variant.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm 
                text-gray-500">
                    {variant.measures.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm 
                text-gray-500">
                    {variant.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm 
                text-gray-500">
                    {variant.min_stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm 
                font-medium text-gray-900">
                    S/. {variant.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap 
                text-sm font-medium">
                    <Link to={`/product/details/edit/${variant.product_id}/${variant.measures_id}`} className="text-ligth-primary
                    p-2 rounded-full hover:text-[#0056b3] 
                    dark:text-dark-primary dark:hover:text-[#e85a3a]">
                        <i className="fa-regular fa-pen-to-square"/>
                    </Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
