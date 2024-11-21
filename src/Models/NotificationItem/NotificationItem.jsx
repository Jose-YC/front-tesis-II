import { useEffect, useState } from 'react'

export const NotificationItem = ({ id, message, type, duration, onClose  }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let intervalCount = 0;
        const timer = setInterval(() => {
            intervalCount++;
            const newProgress = Math.min(100, (intervalCount / (duration / 100)) * 100);
            setProgress(newProgress);
      
            if (newProgress === 100) {
              clearInterval(timer);
              onClose(id);
            }
          }, 100);
    
        return () => {
          clearInterval(timer);
        };
      }, [duration, id]);

  return (
    <div className="mb-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`p-4 ${type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-start">
          {type === 'success' ? (
            <i className="fa-regular fa-circle-check w-5 h-5 text-green-400"/>
          ) : (
            <i className="fa-solid fa-triangle-exclamation w-5 h-5 text-red-400"/>
          )}
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className={`text-sm font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
              {type === 'success' ? 'Success' : 'Error'}
            </p>
            {message && (
              <p className={`mt-1 text-sm ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
            className="inline-flex 
            text-gray-400 hover:text-gray-500 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => onClose(id)}>
              <i className="fa-solid fa-xmark h-5 w-5"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-1">
        <div
          className={`h-full ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
