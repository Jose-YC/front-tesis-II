import React from 'react'
import { useModal } from '../../../hooks';
import { ModalNotification } from '../../../layout/LoggedIn';
import { Link } from 'react-router-dom';

export const ListCategory = ({ data, DeleteCategory }) => {

    if (!data || data.length === 0) {
        return <div>No hay Categoria para mostrar.</div>;
    }

    const{ isModalOpen, modalConfig, openModal, handleModal, } = useModal();

    const handleDelete = (categoryId) => {
      openModal({
        title: 'Eliminar Categoria',
        message: '¿Estás seguro de que quieres desactivar tu categoria? Todos sus datos serán eliminados permanentemente. Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        onConfirm: () => {
            DeleteCategory(categoryId);
          handleModal();
        },
        onClose: () => {handleModal()},
      })
    }

  return (
    <>
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 ">
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
                Nombre
            </th>
            <th scope="col" 
            className="px-3 py-3.5 text-left text-sm 
            font-semibold text-gray-900 dark:text-white">
                Descripcion
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
            {data.map((category, index) => (
            <tr key={category.id}>
                <td className="whitespace-nowrap py-4
                pl-4 pr-3 text-sm font-medium 
                text-gray-900 dark:text-white 
                sm:pl-6">
                {index + 1 }
                </td>
            
                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                </td>

                <td className="whitespace-nowrap px-3 py-4 
                text-sm text-gray-500 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-white">{category.description}</div>
                </td>
                
                <td className="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                    <Link to={`/category/edit/${category.id}`} className="text-ligth-primary hover:text-[#0056b3] 
                    dark:text-dark-primary dark:hover:text-[#e85a3a]">
                        <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <div onClick={() => handleDelete(category.id)} 
                    className="text-ligth-primary hover:text-[#0056b3] 
                    dark:text-[#EE6C4D] dark:hover:text-[#e85a3a]">
                    <i className="fa-regular fa-trash-can"></i>
                    </div>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    <ModalNotification
    modalConfig={modalConfig}
    isOpen={isModalOpen}/>
</>
  )
}
