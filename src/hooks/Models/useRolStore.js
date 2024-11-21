import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useRolStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetRol = async (page, lim) => {
        const {data} = await Api.get(`/rol/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchRol = async (page, lim, search) => {
        const {data} = await Api.get(`/rol/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdRol = async (id) => {
        const {data} = await Api.get(`/rol/search/${id}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data.rol;
    };

    const startAddNewRol = async ({ name }) => {
        try {
            const {data} = await Api.post('/rol/create', { name });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteRol = async (uid) =>{

        try {
            const {data} = await Api.delete(`/rol/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateRol = async ({id, name}) => {
        try {
            const {data} = await Api.put(`/rol/update/${id}`, { name });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewRol,
        startUpdateRol,
        startGetRol,
        DeleteRol,
        startGetSearchRol,
        startGetIdRol
    }
}
