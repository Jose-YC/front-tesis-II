import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useClientStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetClient = async (page, lim) => {
        const {data} = await Api.get(`/client/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchClient = async (page, lim, search) => {
        const {data} = await Api.get(`/client/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdClient = async (id) => {
        const {data} = await Api.get(`/client/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.client;
    };

    const startAddNewClient = async (client) => {
        try {
            const {data} = await Api.post('/client/create', client);
            console.log(data)
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Cliente ingresado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteClient = async (uid) =>{

        try {
            const {data} = await Api.delete(`/client/delete/${uid}`);
            console.log(data)
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Cliente eliminado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateClient = async (id, client) => {
        try {
            const {data} = await Api.put(`/client/update/${id}`, client);
            if (data.Status==false) {throw new Error(data.error)};
            AddNotification({type: 'success', message: 'Cliente modificado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewClient,
        startUpdateClient,
        startGetClient,
        DeleteClient,
        startGetSearchClient,
        startGetIdClient
    }
}
