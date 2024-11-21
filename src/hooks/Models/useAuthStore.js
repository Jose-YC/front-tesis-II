import { useDispatch, useSelector } from 'react-redux';

import {Api} from '../../api';
import { onChecking, onLogin, onLogout } from '../../store';
import { useNotification } from '../useNotification';

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { AddNotification } = useNotification();

    const {isLoginRegister, isStatus, user} = useSelector(state => state.auth);
    
    const startLogin = async ( {email,password} ) => {
        dispatch(onChecking());
       try {
        const {data} = await Api.post('auth/login', {email, password});
        if (data.Status===false) {throw new Error(data.error.message)};
        localStorage.setItem('token', data.token);
        dispatch(onLogin({
            name: data.user.name,
            lastname: data.user.lastname,
            phone: data.user.phone,
            email:data.user.email,
            img:data.user.img,
            emailVeri:data.user.emailVeri,
            rolName: data.user.rolName,
            uid: data.user.id
        }));

       } catch (error) {
        AddNotification({type: 'error', message: error.message, duration: 10000});
        dispatch(onLogout());
       }

    };

    const startRegister = async ( {email, password, lastname, name, phone } ) => {
        dispatch(onChecking());
        try {

            const {data} = await Api.post('auth/register',{email, password, lastname, name, phone});
            if (data.Status===false) {throw new Error(data.error.message)};
            localStorage.setItem('token', data.token);
            dispatch(onLogin({
                name: data.user.name,
                lastname: data.user.lastname,
                phone: data.user.phone,
                email:data.user.email,
                img:data.user.img,
                emailVeri:data.user.emailVeri,
                rolName: data.user.rolName,
                uid: data.user.id
            }));

           } catch (error) {
            AddNotification({type: 'error', message: error.message, duration: 10000});
            dispatch(onLogout());
           }
     };

     const CheckAuthToken = async () => {
       const token = localStorage.getItem('token');
       if (!token) return dispatch(onLogout());
       
       try {

        const {data} = await Api.get('auth/renew');
        if (data.Status===false) {throw new Error(data.error.message)};
        localStorage.setItem('token', data.token);
        dispatch(onLogin({
            name: data.user.name,
            lastname: data.user.lastname,
            phone: data.user.phone,
            email:data.user.email,
            img:data.user.img,
            emailVeri:data.user.emailVeri,
            rolName: data.user.rolName,
            uid: data.user.id
        }));

       } catch (error) {
        localStorage.clear();
        AddNotification({type: 'error', message: error.message, duration: 10000});
        dispatch(onLogout());
       }
    };
    const Logout = ( ) => {
        localStorage.clear();
        dispatch(onLogout());
    };
  
    return {
        isLoginRegister,
        isStatus,
        user,
        

        startLogin,
        startRegister,
        CheckAuthToken,
        Logout

    }
}
