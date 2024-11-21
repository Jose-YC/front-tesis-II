import { useDispatch, useSelector } from 'react-redux';
import { onAddNotification, onDeleteNotification } from '../store/Notification/notificationSlice';

export const useNotification = () => {
    const dispatch = useDispatch();

    const { notifications } = useSelector(state => state.notification);
    
    const AddNotification = async ( Object ) => {
        dispatch(onAddNotification(Object));
    };
    const handleClose = (id) => {
        dispatch(onDeleteNotification({id}))
      }

    return {
        notifications,
        AddNotification,
        handleClose
    }
}
