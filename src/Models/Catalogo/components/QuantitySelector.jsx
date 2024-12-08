import React from 'react'

export const QuantitySelector = ({ quantity, onQuantityChanged }) => {
  
    const onValueChanged = ( value ) => {
        if ( quantity + value < 1 ) return;
        onQuantityChanged( quantity + value );
      };
    
    
      return (
        <div className="flex">
          <button onClick={ () => onValueChanged( -1 ) }>
            <i className="fa-solid fa-minus"/>
          </button>
    
          <span className="w-20 mx-3 px-5 text-center rounded">
            { quantity }
          </span>
    
          <button onClick={ () => onValueChanged( +1 ) }>
            <i className="fa-solid fa-plus w-30"/>
          </button>
    
        </div>
      );
}
