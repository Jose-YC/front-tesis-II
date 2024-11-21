import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useUserStore = () => {

    const { AddNotification } = useNotification();

    const startGetUsers = async (page, lim) => {
        const {data} = await Api.get(`/user/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchUsers = async (page, lim, search) => {
        const {data} = await Api.get(`/user/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const DeleteUser = async (uid) =>{
        try {
            const {data} = await Api.delete(`/user/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };












    const startAddNewUser = async ({email, password, lastname, name, phone}) => {
        try {
            const {data} = await Api.post('/user/create', {email, password, lastname, name, phone});
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateUser = async ({id, email, password, lastname, phone, name, rolName}) => {
        try {
            const {data} = await Api.put(`/user/update/${id}`, {email, password, lastname, phone, name, rolName});
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateProfile = async ({id, lastname, name, phone}) => {
        try {
            const {data} = await Api.put(`/user/profile/${id}`, { lastname, name, phone });

            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateProfilePhoto = async ({id, user}) => {
        
        try {
            const formData = new FormData();
            formData.append('img', user.img);
            formData.append('imgAnt', user.imgAnt);
            const {data} = await Api.put(`/user/photo`, formData);

            console.log(data);
        } catch (error) {
            console.log(error);
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
    }
}
