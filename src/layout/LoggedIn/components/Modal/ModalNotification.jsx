export const ModalNotification = ({isOpen, modalConfig} ) => {
  if (!isOpen) return (null) 
  return (
    <div onClick={() => modalConfig.onClose()}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-center mb-4">
          
        </div>
        <h2 className="text-xl font-semibold text-center mb-2">
        {modalConfig.title}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          {modalConfig.message}
        </p>
        <div className="flex space-x-4">
          <button onClick={() => modalConfig.onClose()}
          className="flex-1 px-4 py-2 border border-gray-300 
          rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button onClick={() => modalConfig.onConfirm()}
          className="flex-1 px-4 py-2 border border-transparent 
          rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {modalConfig.confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
