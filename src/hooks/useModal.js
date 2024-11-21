import { useState } from 'react';

export const useModal = ( ) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    confirmText: '',
    onConfirm: () => {},
    onClose: () => {},
  })

  const openModal = (config) => {
    setModalConfig(config)
    setIsModalOpen(true)
  }

  const handleModal = () => {
    setIsModalOpen(false)
  }

    return {
      isModalOpen,
      modalConfig,
      openModal,
      handleModal,
    }
}