import { useState } from 'react';

export const useFieldArray = ( name, array = [], setValue = () => {} ) => {

    const [field, setField] = useState(array);
    
    const addArray = ( value ) => {
        setField((prev) => [...prev, value]);
        setValue(name, field);
    }

    const updateArray = (index, fields, value) => {
        setField((prev) => ( prev.map(( f ) => f.id === index ? { ...f, [fields]: value } : f) ));
        setValue(name, field);
    };

    const removeArray = ( index ) => {
        setField((prev) => ( prev.filter((f) => f.id !== index)));
        setValue(name, field);
      };

    return {
        field,
        addArray,
        updateArray,
        removeArray,
    }
}