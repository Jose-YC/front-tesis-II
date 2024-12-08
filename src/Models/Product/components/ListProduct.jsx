import React from 'react'
import { useModal } from '../../../hooks';
import { ProductDetailsCart } from './ProductDetailsCart';
import { ModalNotification } from '../../../layout/LoggedIn';

export const ListProduct = ({data = [], DeleteProduct}) => {
    if (!data || data.length === 0) {
        return <div>No hay Productos para mostrar.</div>;
    }

    const{ isModalOpen, modalConfig, openModal, handleModal, } = useModal();

    const handleDelete = (productId) => {
      openModal({
        title: 'Eliminar Producto',
        message: '¿Estás seguro de que quieres desactivar tu producto? Todos sus datos serán eliminados permanentemente. Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        onConfirm: () => {
            DeleteProduct(productId);
          handleModal();
        },
        onClose: () => {handleModal()},
      })
    };

  return (
    <>
    

          {
              data.map((product) => (
                  <ProductDetailsCart 
                  key={product.id}
                  product={product} 
                  handleDelete={handleDelete}/>
              ))
          }
          <ModalNotification
          modalConfig={modalConfig}
          isOpen={isModalOpen}/>
    
    </>
  )
}
