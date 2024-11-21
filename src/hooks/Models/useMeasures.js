import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useMeasuresStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetMeasures = async (page, lim) => {
        const {data} = await Api.get(`/measures/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchMeasures = async (page, lim, search) => {
        const {data} = await Api.get(`/measures/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdMeasures = async (id) => {
        const {data} = await Api.get(`/measures/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.measures;
    };

    const startAddNewMeasures = async ({ name }) => {
        try {
            const {data} = await Api.post('/measures/create', { name });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteMeasures = async (uid) =>{

        try {
            const {data} = await Api.delete(`/measures/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateMeasures = async ({id, name}) => {
        try {
            const {data} = await Api.put(`/measures/update/${id}`, { name });
            console.log(data);
        } catch (error) {
            console.log(error);
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
