import {Api} from '../../api';
import { useNotification } from '../useNotification';

export const useSaleStore = () => {
    
    const { AddNotification } = useNotification();

    const startGetSale = async (page, lim) => {
        const {data} = await Api.get(`/sale/?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetTotalMonth = async (fechas) => {
        const {data} = await Api.post(`/sale/total/month`, fechas);
        
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetTotalDay = async (fechas) => {
        const {data} = await Api.post(`/sale/total/day`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetQuantity = async (fechas) => {
        const {data} = await Api.post(`/sale/quantity`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetCategoryMonth = async (fechas) => {
        const {data} = await Api.post(`/sale/details/category`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetProductTop = async (fechas) => {
        const {data} = await Api.post(`/sale/details/top`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetProductSale = async (fechas) => {
        const {data} = await Api.post(`/sale/details/product/sale`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetQuantityProductDay = async (fechas) => {
        const {data} = await Api.post(`/sale/quantity`, fechas);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };

    const startGetSearchSale = async (page, lim, search) => {
        const {data} = await Api.get(`/sale/${search}?lim=${lim}&page=${page}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data;
    };
    
    const startGetIdSale = async (id) => {
        const {data} = await Api.get(`/sale/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.sale;
    };

    const startGetIdDetailsSale = async (id) => {
        const {data} = await Api.get(`/sale/details/search/${id}`);
        if (data.Status==false) {throw new Error(data.message)};
        return data.sale;
    };

    const startAddNewSale = async (sale) => {
        try {
            const {data} = await Api.post('/sale/create', sale);
            if (data.Status==false) {throw new Error(data.message)};
            AddNotification({type: 'success', message: 'Venta ingresada correctamente', duration: 10000});
        } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
        }
    };

    
    return {
        startAddNewSale,
        startGetSale,
        startGetSearchSale,
        startGetIdSale,
        startGetQuantity,
        startGetTotalDay,
        startGetTotalMonth,
        startGetQuantityProductDay,
        startGetProductSale,
        startGetProductTop,
        startGetCategoryMonth,
        startGetIdDetailsSale
    }
}
