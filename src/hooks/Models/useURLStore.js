import {Api} from '../../api';
import { useNotification } from '../useNotification';


export const useURLStore = () => {

    const { AddNotification } = useNotification();

    const startGetURL = async (desde, limite) => {
        try {
            const {data} = await Api.get(`/url/?lim=${limite}&page=${(desde)*limite}`);
            
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startGetURLUser = async (desde, limite, uid) => {
        try {
            const {data} = await Api.get(`/url/user/${uid}?lim=${limite}&page=${(desde)*limite}`);
            
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startAddNewURL = async (url_original, password, option) => {
        try {
            const {data} = await Api.post('/url/create', url_original, password, option);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const startUpdateURL = async ({uid, rol}) => {
        try {
            const {data} = await Api.put(`/url/update/${uid}`, rol);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteURL = async (uid) =>{

        try {
            const {data} = await Api.delete(`/url/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };
    
    return {
        startAddNewURL,
        startUpdateURL,
        startGetURLUser,
        startGetURL,
        DeleteURL
    }
}
