import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useDetailsProductMeasuresStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetDetailsPM = async (page, lim, product_id) => {
        const {data} = await Api.get(`/product/measures/${product_id}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    
    const startGetIdDetailsPM = async (product_id, measures_id) => {
        const {data} = await Api.get(`/product/measure/search/${product_id}/${measures_id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.measures;
    };

    const startAddNewDetailsPM = async (details) => {
        try {
            const {data} = await Api.post('/details/product/measures/create', details);
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Medida añadida correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteDetailsPM = async (measures_id, product_id) =>{

        try {
            const {data} = await Api.delete(`/details/product/measures/delete/${product_id}/${measures_id}`);
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateDetailsPM = async (product_id, measures_id, details) => {
        try {
            const {data} = await Api.put(`/product/measure/update/${product_id}/${measures_id}`, details);
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Medida modificada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewDetailsPM,
        startGetDetailsPM,
        DeleteDetailsPM,
        startGetIdDetailsPM,
        startUpdateDetailsPM
    }
}
