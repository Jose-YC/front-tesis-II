import { useNotification } from '../../hooks/useNotification'
import { NotificationItem } from './NotificationItem'

export const NotificationSystem = () => {

  const { notifications, handleClose } = useNotification()

  if (!notifications || notifications.length === 0) return;

  return (
    <div className="absolute top-4 right-4 space-y-4 z-10">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            message={notification.message}
            type={notification.type}
            duration={notification.duration}
            onClose={handleClose}
          />
        ))}
      </div>
  )
}
