import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useUserStore = () => {

    const { AddNotification } = useNotification();

    const startGetUsers = async (page, lim) => {
        const {data} = await Api.get(`/user/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetIdUser = async (id) => {
        const {data} = await Api.get(`/user/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.user;
    };

    const startGetSearchUsers = async (page, lim, search) => {
        const {data} = await Api.get(`/user/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const DeleteUser = async (uid) =>{
        try {
            const {data} = await Api.delete(`/user/delete/${uid}`);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Usuario eliminado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };


    const startAddNewUser = async (user) => {
        try {
            const {data} = await Api.post('/user/create', user);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Usuario ingresado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateUser = async (user, id) => {
        try {
            const {data} = await Api.put(`/user/update/${id}`, user);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Usuario modificado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateProfile = async ({id, lastname, name, phone}) => {
        try {
            const {data} = await Api.put(`/user/profile/${id}`, { lastname, name, phone });
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Perfil modificado correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateProfilePhoto = async ({id, user}) => {
        
        try {
            const formData = new FormData();
            formData.append('img', user.img);
            formData.append('imgAnt', user.imgAnt);
            const {data} = await Api.put(`/user/photo`, formData);
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewUser,
        startUpdateUser,
        startUpdateProfile,
        startGetUsers,
        startUpdateProfilePhoto,
        DeleteUser,
        startGetSearchUsers,
        startGetIdUser
    }
}
