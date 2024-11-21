import { createSlice } from '@reduxjs/toolkit';

export const OrdenSlice = createSlice({
    name: 'orden',
    initialState: {
        product: [],
    },
    reducers: {
        onAddProductOrden: (state,{payload} ) => {
            const { id, name, product_id, measures_id, name_measures, price, quantity, url } = payload;
            const productInOrden = state.product.some(
                (item) => (item.product_id === product_id && item.measures_id === measures_id)
            );
            console.log(productInOrden);
            if (!productInOrden) {
                state.product = [
                    ...state.product, 
                    { 
                        id, 
                        name, 
                        product_id, 
                        measures_id, 
                        name_measures, 
                        price, 
                        quantity, 
                        url 
                    }
                ];
                return
            }
            state.product =  state.product.map((item) => {
                if (item.product_id === product_id && item.measures_id === measures_id) {
                    return {...item, quantity: item.quantity + quantity}
                }
                return item; 
            });
        },

        onDeleteProductOrden: (state, {payload}) => {
            const { id } = payload;
             state.product = state.product.filter((f) => f.id !== id);
        },

        onUpdateQuantity: (state, {payload}) => {
            const { product, quantity } = payload;
            state.product = state.product.map((item) => {
                if (item.product_id === product.product_id && 
                    item.measures_id === product.measures_id) {
                    return {...item, quantity}
                }
                return item; 
            });
        },

        onResetProductOrden: (state) => {
            state.product = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const { onAddProductOrden, onDeleteProductOrden,
               onResetProductOrden, onUpdateQuantity } = OrdenSlice.actions;