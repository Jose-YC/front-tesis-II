import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useCategoryStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetCategory = async (page, lim) => {
        const {data} = await Api.get(`/category/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };

    const startGetSearchCategory = async (page, lim, search) => {
        const {data} = await Api.get(`/category/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.error)};
        return data;
    };
    
    const startGetIdCategory = async (id) => {
        const {data} = await Api.get(`/category/search/${id}`);
        console.log(data)
        if (data.Status==false) {throw new Error(data.error)};
        return data.category;
    };

    const startAddNewCategory = async (category) => {
        try {
            const {data} = await Api.post('/category/create', category);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    const DeleteCategory = async (uid) =>{

        try {
            const {data} = await Api.delete(`/category/delete/${uid}`);
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
        
    };

    const startUpdateCategory = async ({id, name, description, parent_id}) => {
        try {
            const {data} = await Api.put(`/category/update/${id}`, { name, description, parent_id});
            console.log(data);
        } catch (error) {
            console.log(error);
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };
    
    return {
        startAddNewCategory,
        startUpdateCategory,
        startGetCategory,
        DeleteCategory,
        startGetSearchCategory,
        startGetIdCategory
    }
}
