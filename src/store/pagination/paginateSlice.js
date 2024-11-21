import { createSlice } from '@reduxjs/toolkit';

export const paginateSlice = createSlice({
    name: 'paginate',
    initialState: {
        data: [],
        currentGroup: 5,
        totalPages: 0,
        isLoading: false,
        error: null,
    },
    reducers: {
        onDeclareVariables: (state,{payload} ) => {
            const { total, data, currentPage } = payload;
            state.data[currentPage] = data
            state.totalPages = Math.ceil(total / state.currentGroup);
        },

        onIsLoading: (state,{payload} ) => {
             state.isLoading = payload.isLoading;
        },

        onResetData: (state) => {
            state.data = [];
            state.totalPages = 0;
            state.isLoading = false;
            state.error = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onDeclareVariables, onResetData, 
               onIsLoading, } = paginateSlice.actions;