import { Link } from "react-router-dom"
import { ModalNotification } from "../../../layout/LoggedIn";
import { useModal } from "../../../hooks";

export const ListUser = ({data, DeleteUser}) => {
  if (!data || data.length === 0) {
    return <div>No hay usuarios para mostrar.</div>;
  }
  const{ isModalOpen, modalConfig, openModal, handleModal, } = useModal();

    const handleDelete = (userId) => {
      openModal({
        title: 'Deactivate account',
        message: 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
        confirmText: 'Deactivate',
        onConfirm: () => {
          DeleteUser(userId);
          handleModal();
        },
        onClose: () => {handleModal()},
      })
    }

  return (
    <>
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-dark-secondary-900 dark:bg-opacity-65">
        <tr>  
          <th scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm 
          font-semibold text-gray-900 dark:text-white
          sm:pl-6 uppercase tracking-wider">
            Codigo
          </th>
          <th scope="col" 
          className="px-3 py-3.5 text-left text-sm 
          font-semibold text-gray-900 dark:text-white
          uppercase tracking-wider">
            Foto
          </th>
          <th scope="col" 
          className="px-3 py-3.5 text-left text-sm 
          font-semibold text-gray-900 dark:text-white
          uppercase tracking-wider">
            Nombre
          </th>
          <th scope="col" 
          className="pl-3 pr-4  px-3 py-3.5 text-left 
          text-sm font-semibold text-gray-900 
          dark:text-white uppercase tracking-wider">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 
      dark:divide-gray-700 bg-white 
      dark:bg-dark-secondary-100">
        {data.map((user, index) => (
          <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-dark-secondary-900 dark:hover:bg-opacity-65">
            <td className="whitespace-nowrap py-4
              pl-4 pr-3 text-sm font-medium 
              text-gray-900 dark:text-white 
              sm:pl-6">
              {index + 1 }
            </td>
            <td className="whitespace-nowrap px-3 py-4 
            text-sm text-gray-500 dark:text-gray-300">
              <img className="h-10 w-10 rounded-full" src={'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1708979352/Users/ayuzfuaaawlr1bk5dxca.png'} alt="" />
            </td>
            <td className="whitespace-nowrap px-3 py-4 
            text-sm text-gray-500 dark:text-gray-300">
              <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
              <div className="text-gray-500 dark:text-gray-400">{user.rolName}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm">
              <div className="flex gap-2">
                <Link
                className="text-ligth-primary hover:text-[#0056b3] 
                dark:text-dark-primary dark:hover:text-[#e85a3a]">
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>

                <div onClick={() => handleDelete(user.id)} 
                className="text-ligth-primary hover:text-[#0056b3] 
                dark:text-[#EE6C4D] dark:hover:text-[#e85a3a]">
                <i className="fa-regular fa-trash-can"></i>
                </div>
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
