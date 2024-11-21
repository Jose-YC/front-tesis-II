import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useDetailsProductMeasuresStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetDetailsPM = async (page, lim, product_id) => {
        const {data} = await Api.get(`/details/product/measures/${product_id}?lim=${lim}&page=${page}`);
        console.log(data);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    
    const startGetIdDetailsPM = async (measures_id, product_id) => {
        const {data} = await Api.get(`/details/product/measures/search/${product_id}/${measures_id}`);
        console.log(data)
        if (data.Status==false) {throw new Error(data.error)};
        return data.measures;
    };

    const startAddNewDetailsPM = async (details) => {
        try {
            const {data} = await Api.post('/details/product/measures/create', details);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteDetailsPM = async (measures_id, product_id) =>{

        try {
            const {data} = await Api.delete(`/details/product/measures/delete/${product_id}/${measures_id}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };
    
    return {
        startAddNewDetailsPM,
        startGetDetailsPM,
        DeleteDetailsPM,
        startGetIdDetailsPM
    }
}
