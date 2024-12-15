import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useRolStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetRol = async (page, lim) => {
        const {data} = await Api.get(`/rol/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetSearchRol = async (page, lim, search) => {
        const {data} = await Api.get(`/rol/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };
    
    const startGetIdRol = async (id) => {
        const {data} = await Api.get(`/rol/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.rol;
    };

    const startAddNewRol = async (rol) => {
        try {
            const {data} = await Api.post('/rol/create', rol);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Rol ingresado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteRol = async (uid) =>{

        try {
            const {data} = await Api.delete(`/rol/delete/${uid}`);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Rol eliminado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateRol = async (id, rol) => {
        try {
            const {data} = await Api.put(`/rol/update/${id}`, rol);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Rol modificado correctamente', duration: 10000});
        } catch (error) {
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
