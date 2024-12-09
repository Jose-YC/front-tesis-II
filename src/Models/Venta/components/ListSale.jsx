import React from 'react'
import { Link } from 'react-router-dom';
import { getEnvVariables } from '../../../helpers';

export const ListSale = ({ data }) => {
    const {VITE_API_URL} = getEnvVariables();
    if (!data || data.length === 0) {
        return <div>No hay Ventas para mostrar.</div>;
      }
  return (
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 text-center">
        <thead className="bg-gray-50 dark:bg-dark-secondary-900 dark:opacity-65">
            <tr>  
            <th scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm 
            font-semibold text-gray-900 dark:text-white
            sm:pl-6">
                Codigo
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Cliente
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Cantidad de Productos
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Sub Total
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Impuestos
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Total
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Fecha de Venta
            </th>
            <th scope="col" 
            className="pl-3 pr-4  px-3 py-3.5 text-left 
            text-sm font-semibold text-gray-900 
            dark:text-white">
                Acciones
            </th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200
        dark:divide-gray-700 bg-white
        dark:bg-dark-secondary-100">
            {data.map((sale, index) => (
            <tr key={sale.id}>
                <td className="whitespace-nowrap py-4
                pl-4 pr-3 text-sm font-medium 
                text-gray-900 dark:text-white 
                sm:pl-6">
                {index + 1 }
                </td>
            
                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">
                    { sale.client.num_doc && sale.client.num_doc !== '00000000' ? sale.client.num_doc : 'N/A' }
                </div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{sale.itemsInVenta}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{sale.subTotal}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{sale.tax}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{sale.total}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white"> { sale.createdAt } </div>
                </td>
                
                <td className="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                    <Link to={`/sale/${sale.id}`} className="text-ligth-primary hover:text-[#0056b3] 
                    dark:text-dark-primary dark:hover:text-[#e85a3a]">
                    <i className="fa-regular fa-eye"/>
                    </Link>
                    <div onClick={() => window.open(`${VITE_API_URL}/sale/pdf/${sale.id}`, '_blank', 'noopener,noreferrer')} 
                    className="text-ligth-primary hover:text-[#0056b3] 
                    dark:text-[#EE6C4D] dark:hover:text-[#e85a3a]">
                        <i className="fa-solid fa-print"/>
                    </div>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}
