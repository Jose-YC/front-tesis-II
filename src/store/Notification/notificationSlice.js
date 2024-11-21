import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notifications: [],
    },
    reducers: {
        
        onAddNotification: (state,{payload} ) => {
            const { message, type, duration } = payload;
            state.notifications.push({id: Date.now(), type, message, duration});
        },

        onDeleteNotification: (state,{payload} ) => {
            const { id } = payload;
            state.notifications = state.notifications.filter(notification => notification.id !== id)
        },
    }
});

// Action creators are generated for each case reducer function
export const { onAddNotification, onDeleteNotification } = notificationSlice.actions;