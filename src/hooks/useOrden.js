import { useDispatch, useSelector } from 'react-redux';
import { onAddProductOrden, onDeleteProductOrden, onResetProductOrden, onUpdateQuantity } from '../store';

export const useOrden = () => {
    const dispatch = useDispatch();

    const { product } = useSelector(state => state.orden);
    
    const AddProductOrden = async ( Object ) => {
        dispatch(onAddProductOrden(Object));
    };
    const DeleteProductOrden = (id) => {
        dispatch(onDeleteProductOrden({id}))
    }
    const ResetProductOrden = () => {
        dispatch(onResetProductOrden())
    }
    const UpdateQuantity = (product, quantity) => {
        dispatch(onUpdateQuantity({product, quantity}))
    }

    const calculateTotals = () => {
        const total = product.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { total };
      };

    return {
        product,
        AddProductOrden,
        DeleteProductOrden,
        ResetProductOrden,
        UpdateQuantity,
        calculateTotals
    }
}
