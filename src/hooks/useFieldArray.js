import { useState } from 'react';

export const useFieldArray = ( ) => {

    const [field, setField] = useState([]);
    
    const addArray = ( value ) => {
        setField((prev) => [...prev, value]);
    }

    const updateArray = (index, fields, value) => {
        setField((prev) => ( prev.map(( f ) => f.id === index ? { ...f, [fields]: value } : f) ));
    };

    const removeArray = ( index, property = 'id' ) => {
        setField((prev) => ( prev.filter((f) => f[property] !== index)));
    };

    return {
        field,
        addArray,
        updateArray,
        removeArray,
    }
}