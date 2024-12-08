import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useDetailsProductCateryStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetDetailsPC = async (page, lim, product_id) => {
        const {data} = await Api.get(`/details/product/category/${product_id}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    
    const startGetIdDetailsPC = async (category_id, product_id) => {
        const {data} = await Api.get(`/details/product/category/search/${product_id}/${category_id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.category;
    };

    const startAddNewDetailsPC = async (details) => {
        try {
            const {data} = await Api.post('/details/product/category/create', details);
            
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteDetailsPC = async (category_id, product_id) =>{

        try {
            const {data} = await Api.delete(`/details/product/category/delete/${product_id}/${category_id}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };
    
    return {
        startAddNewDetailsPC,
        startGetDetailsPC,
        DeleteDetailsPC,
        startGetIdDetailsPC
    }
}
