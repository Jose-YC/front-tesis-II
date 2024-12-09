import { Link } from 'react-router-dom';
import { getEnvVariables } from '../../../helpers';

export const ListOrden = ({ data, startUpdateOrden }) => {
    const {VITE_API_URL} = getEnvVariables();

    if (!data || data.length === 0) {
        return <div>No hay Ordenes para mostrar.</div>;
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
                Proveedor
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Cantidad de Productos
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Total
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Fecha de Entrega
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Estado
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
            {data.map((orden, index) => (
            <tr key={orden.id}>
                <td className="whitespace-nowrap py-4
                pl-4 pr-3 text-sm font-medium 
                text-gray-900 dark:text-white 
                sm:pl-6">
                {index + 1 }
                </td>
            
                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{orden.proveedor.repre}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{orden.itemsInOrder}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{orden.total}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">
                    { orden.deliveredAt ? orden.deliveredAt : '--/--/----' }
                </div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                    <select 
                    value={orden.state}
                    onChange={(e) => startUpdateOrden(orden.id, e.target.value)}
                    className="w-full px-3 py-2 bg-[#F9FAFB] 
                    border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-gray-200">
                        <option value="PENDING">Pendiente</option>
                        <option value="DELIVERED">Entregado</option>
                        <option value="CANCELLED">Cancelado</option>
                     </select>
                </td>
                
                <td className="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                    <Link to={`/orden/${orden.id}`} className="text-ligth-primary hover:text-[#0056b3] 
                    dark:text-dark-primary dark:hover:text-[#e85a3a]">
                    <i className="fa-regular fa-eye"/>
                    </Link>
                    <div onClick={() => window.open(`${VITE_API_URL}/orden/pdf/${orden.id}`, '_blank', 'noopener,noreferrer')} 
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
