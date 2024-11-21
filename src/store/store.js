import {configureStore} from '@reduxjs/toolkit'
import { authSlice, notificationSlice, paginateSlice } from './'

export const store = configureStore({
    reducer: {
        notification: notificationSlice.reducer,
        paginate: paginateSlice.reducer,
        auth: authSlice.reducer,
    }
})