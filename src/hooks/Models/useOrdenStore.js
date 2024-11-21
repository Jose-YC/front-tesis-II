import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useOrdenStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetOrden = async (page, lim) => {
        const {data} = await Api.get(`/orden/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchOrden = async (page, lim, search) => {
        const {data} = await Api.get(`/orden/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdOrden = async (id) => {
        const {data} = await Api.get(`/orden/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.orden;
    };

    const startAddNewOrden = async ({ name }) => {
        try {
            const {data} = await Api.post('/orden/create', { name });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateOrden = async ({id, name}) => {
        try {
            const {data} = await Api.put(`/orden/update/${id}`, { name });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewOrden,
        startUpdateOrden,
        startGetOrden,
        startGetSearchOrden,
        startGetIdOrden
    }
}
