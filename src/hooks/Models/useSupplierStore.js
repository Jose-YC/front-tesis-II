import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useSupplierStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetSupplier = async (page, lim) => {
        const {data} = await Api.get(`/supplier/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchSupplier = async (page, lim, search) => {
        const {data} = await Api.get(`/supplier/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdSupplier = async (id) => {
        const {data} = await Api.get(`/supplier/search/${id}`);
        console.log(data);
        if (data.Status==false) {throw new Error(data.error)};
        return data.supplier;
    };

    const startAddNewSupplier = async ({ repre, ruc, email, address, phone }) => {
        try {
            const {data} = await Api.post('/supplier/create', { repre, ruc, email, address, phone });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteSupplier = async (uid) =>{

        try {
            const {data} = await Api.delete(`/supplier/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateSupplier = async ({id, repre, ruc, email, address, phone}) => {
        try {
            const {data} = await Api.put(`/supplier/update/${id}`, { repre, ruc, email, address, phone });
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewSupplier,
        startUpdateSupplier,
        startGetSupplier,
        DeleteSupplier,
        startGetSearchSupplier,
        startGetIdSupplier
    }
}
