import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useProductStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetProduct = async (page, lim) => {
        const {data} = await Api.get(`/product/?lim=${lim}&page=${page}`);
        console.log(data);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchProduct = async (page, lim, search) => {
        const {data} = await Api.get(`/product/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdProductDetails = async (id) => {
        const {data} = await Api.get(`/product/details/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.product;
    };

    const startGetIdProduct = async (id) => {
        const {data} = await Api.get(`/product/details/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.product;
    };

    const startAddNewProduct = async (product) => {
        try {
            const {data} = await Api.post('/product/create', product);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteProduct = async (uid) =>{

        try {
            const {data} = await Api.delete(`/product/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateProduct = async (product) => {
        try {
            const {data} = await Api.put(`/product/update/${product.id}`, product);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewProduct,
        startUpdateProduct,
        startGetProduct,
        DeleteProduct,
        startGetSearchProduct,
        startGetIdProduct,
        startGetIdProductDetails
    }
}
