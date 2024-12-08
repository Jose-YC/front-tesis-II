import React from 'react'
import { useModal } from '../../../hooks';
import { ModalNotification } from '../../../layout/LoggedIn';
import { Link } from 'react-router-dom';

export const ListClient = ({data, DeleteClient}) => {
    if (!data || data.length === 0) {
        return <div>No hay Client para mostrar.</div>;
    }

    const{ isModalOpen, modalConfig, openModal, handleModal, } = useModal();

    const handleDelete = (clientId) => {
      openModal({
        title: 'Eliminar Client',
        message: '¿Estás seguro de que quieres desactivar tu cliente? Todos sus datos serán eliminados permanentemente. Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        onConfirm: () => {
            DeleteClient(clientId);
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
                className="px-3 py-3.5 text-left text-sm 
                font-semibold text-gray-900 dark:text-white">
                    Numero de Documento
                </th>
                <th scope="col" 
                className="px-3 py-3.5 text-left text-sm 
                font-semibold text-gray-900 dark:text-white">
                    Nombre
                </th>
                <th scope="col" 
                className="px-3 py-3.5 text-left text-sm 
                font-semibold text-gray-900 dark:text-white">
                    Email
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
                {data.map((client, index) => (
                <tr key={client.num_doc}>

                    <td className="whitespace-nowrap px-3 py-4 
                    text-sm text-gray-500 dark:text-gray-300">
                    <div className="font-medium text-gray-900 dark:text-white">{client.num_doc}</div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 
                    text-sm text-gray-500 dark:text-gray-300">
                    <div className="font-medium text-gray-900 dark:text-white">{client.name}</div>
                    </td>


                    <td className="whitespace-nowrap px-3 py-4 
                    text-sm text-gray-500 dark:text-gray-300">
                    <div className="font-medium text-gray-900 dark:text-white">{client.email}</div>
                    </td>
                    
                    <td className="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                        <Link to={`/client/edit/${client.num_doc}`} className="text-ligth-primary hover:text-[#0056b3] 
                        dark:text-dark-primary dark:hover:text-[#e85a3a]">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        <div onClick={() => handleDelete(client.num_doc)} 
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
