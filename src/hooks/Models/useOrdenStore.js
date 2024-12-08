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

    const startGetIdDetailsOrden = async (id) => {
        const {data} = await Api.get(`/orden/details/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.orden;
    };


    const startAddNewOrden = async (orden) => {
        try {
            const {data} = await Api.post('/orden/create', orden);
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Orden ingresada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateOrden = async (id, state) => {
        try {
            const {data} = await Api.put(`/orden/update/${id}`, {state});
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Orden modificada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewOrden,
        startUpdateOrden,
        startGetOrden,
        startGetSearchOrden,
        startGetIdOrden,
        startGetIdDetailsOrden,
    }
}
