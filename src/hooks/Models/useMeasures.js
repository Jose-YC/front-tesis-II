import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useMeasuresStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetMeasures = async (page, lim) => {
        const {data} = await Api.get(`/measures/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetSearchMeasures = async (page, lim, search) => {
        const {data} = await Api.get(`/measures/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };
    
    const startGetIdMeasures = async (id) => {
        const {data} = await Api.get(`/measures/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.measures;
    };

    const startAddNewMeasures = async (measure) => {
        try {
            const {data} = await Api.post('/measures/create', measure);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Medida ingresada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteMeasures = async (uid) =>{

        try {
            const {data} = await Api.delete(`/measures/delete/${uid}`);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Medida eliminada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateMeasures = async (id, measure) => {
        try {
            const {data} = await Api.put(`/measures/update/${id}`, measure);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Medida modificada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewMeasures,
        startUpdateMeasures,
        startGetMeasures,
        DeleteMeasures,
        startGetSearchMeasures,
        startGetIdMeasures
    }
}
