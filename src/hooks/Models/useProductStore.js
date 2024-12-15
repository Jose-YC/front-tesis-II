import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useProductStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetProduct = async (page, lim) => {
        const {data} = await Api.get(`/product?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetProductDetails = async (page, lim) => {
        const {data} = await Api.get(`/product/details?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetSearchProduct = async (page, lim, search) => {
        const {data} = await Api.get(`/product/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetSearchProductDetails = async (page, lim, search) => {
        const {data} = await Api.get(`/product/details/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };
    
    const startGetIdProductDetails = async (id) => {
        const {data} = await Api.get(`/product/details/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.product;
    };

    const startGetIdProduct = async (id) => {
        const {data} = await Api.get(`/product/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.product;
    };

    const startAddNewProduct = async (product) => {
        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("measures", JSON.stringify(product.measures));
        formData.append("category", JSON.stringify(product.category));
        product.img.forEach((file) => {
            formData.append(`img`, file)
        });
        // product.measures.forEach((measure) => {
        //     formData.append(`measures`, measure)
        // });
        // product.category.forEach((obj) => {
        //     formData.append(`category`, obj)
        // });
    
        try {
            const {data} = await Api.post('/product/create', formData);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Producto ingresado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteProduct = async (uid) =>{

        try {
            const {data} = await Api.delete(`/product/delete/${uid}`);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Producto eliminado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateProduct = async (id, product) => {
        try {
            const {data} = await Api.put(`/product/update/${id}`, product);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Producto modificado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewProduct,
        startUpdateProduct,
        startGetProduct,
        startGetProductDetails,
        DeleteProduct,
        startGetSearchProduct,
        startGetSearchProductDetails,
        startGetIdProduct,
        startGetIdProductDetails
    }
}
