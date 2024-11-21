import { useEffect, useMemo, useState } from 'react';
import { useNotification } from './useNotification';

export const useForm = ( initialForm = {}, formValidations = {}, startGetId, id ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});
    const { AddNotification } = useNotification()

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])

    useEffect(() => {
        if (!id) return
        AxiosData( id );
    }, [ id ])

    const AxiosData = async (id) => {
        try {
            const result = await startGetId(id);
            Object.keys(result).forEach((key) => {setValue(key, result[key])});
        } catch (error) {   
          AddNotification({type: 'error', message: error.message, duration: 10000})
        } 
      }; 
    
    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const setValue = (name, value) => {
        setFormState((prevState) => ({
             ...prevState, 
             [name]: value 
            }));
      };

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setValue,

        ...formValidation,
        isFormValid,
        initialForm
    }
}