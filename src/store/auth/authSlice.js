import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isStatus: 'checking',
        user: {},
    },
    reducers: {
        onChecking: (state) => {
            state.isStatus = 'checking';
            state.user = {};
        },

        onLogin: (state, {payload}) => {
            state.isStatus = 'authenticated';
            state.user = payload;
        },

        onLogout: (state) => {
            state.isStatus = 'not-authenticated';
            state.user = {};
        },
        
    }
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, 
               onLogout } = authSlice.actions;