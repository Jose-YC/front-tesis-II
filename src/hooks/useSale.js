import { useDispatch, useSelector } from 'react-redux';
import { onAddProductVenta, onDeleteProductVenta, onResetProductVenta, onUpdateQuantityVenta } from '../store';

export const useSale = () => {
    const dispatch = useDispatch();

    const { product, taxRate = 0.16 } = useSelector(state => state.sale);
    
    const AddProductVenta = async ( Object ) => {
        dispatch(onAddProductVenta(Object));
    };

    const DeleteProductVenta = (id) => {
        dispatch(onDeleteProductVenta({id}))
    }

    const ResetProductVenta = (id) => {
        dispatch(onResetProductVenta({id}))
    }
    const UpdateQuantityVenta = (product, quantity) => {
        dispatch(onUpdateQuantityVenta({product, quantity}))
    }

    const calculateTotals = () => {
        const subtotal = product.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        console.log(subtotal, taxRate)
        const taxAmount = subtotal ? subtotal * taxRate : 0;
        const total = subtotal && taxAmount ? subtotal + taxAmount: 0;
        return { subtotal, taxAmount, total };
      };

    return {
        product, 
        
        AddProductVenta,
        DeleteProductVenta,
        ResetProductVenta,
        UpdateQuantityVenta,
        calculateTotals
    }
}
