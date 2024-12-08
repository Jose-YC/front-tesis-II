import { createSlice } from '@reduxjs/toolkit';

const calculateTotals = (products, taxRate) => {
    const subtotal = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(subtotal);
    const taxAmount = subtotal ? subtotal * taxRate : 0;
    const total = subtotal ? subtotal + taxAmount: 0;
    return { subtotal, taxAmount, total };
  };

export const SaleSlice = createSlice({
    name: 'sale',
    initialState: {
        product: [],
        taxRate: 0.16,      
    },
    reducers: {
        onAddProductVenta: (state,{payload} ) => {
            const { id, name, product_id, measures_id, name_measures, price, quantity, url } = payload;
            const productInSale = state.product.some(
                (item) => 
                    (item.product_id === product_id && 
                    item.measures_id === measures_id)
            ); 
            
            if (!productInSale) {
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
                if (item.product_id === product_id && 
                    item.measures_id === measures_id) {
                    return {...item, quantity: item.quantity + quantity}
                }
                return item;
            });
            
        },

        onDeleteProductVenta: (state, {payload}) => {
            const { id } = payload;
            state.product = state.product.filter((f) => f.id !== id);
        },

        onUpdateQuantityVenta: (state, {payload}) => {
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
export const { onAddProductVenta, onDeleteProductVenta, 
               onResetProductVenta, onUpdateQuantityVenta } = SaleSlice.actions;