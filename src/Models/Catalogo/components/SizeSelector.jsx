import React from 'react'

export const SizeSelector = ({ selectedSize, availableSizes = [], onSizeChanged }) => {
  return (
    <div className="my-5">
    <h3 className="font-bold mb-4">Medidas disponibles</h3>

    <div className="flex">

      {
        availableSizes.map( size => (
          <button 
            key={ size.id }
            onClick={ () => onSizeChanged(size) }
            className={`mx-2 hover:underline text-lg ${size.measures.abbrev === selectedSize ? 'underline' : ''}`} >
            { size.measures.abbrev}
          </button>
        ))

      }


    </div>



  </div>
  )
}
