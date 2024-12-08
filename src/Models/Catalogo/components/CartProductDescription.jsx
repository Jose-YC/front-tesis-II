import { useState } from 'react'
import { CarruselProduct } from './CarruselProduct'
import { SizeSelector } from './SizeSelector'
import { QuantitySelector } from './QuantitySelector'
import { useOrden, useSale } from '../../../hooks'

export const CartProductDescription = ({ product = {} }) => {

    const [size, setSize] = useState(() => {
      if (product?.itemsMeasures?.length === 1) {
        return product.itemsMeasures[0];
      }
      return { measures: { abbrev: 'not' } }; 
    });

    console.log(size);

    const { AddProductOrden } = useOrden()
    const { AddProductVenta } =  useSale()
  
    
    const [quantity, setQuantity] = useState(1);
    const [posted, setPosted] = useState(false);

    const addToCartVenta = () => {
        setPosted(true);
    
        if (size.measures.abbrev === 'not') return;

        AddProductVenta({
          id: size.id, 
          name: product.name, 
          product_id: product.id, 
          measures_id: size.measures_id, 
          name_measures: size.measures.name, 
          price: size.price, 
          quantity, 
          url: product.productImage[0].url
        });

        setPosted(false);
        setQuantity(1);

        setSize(
          () => {
            if (product?.itemsMeasures?.length === 1) {
              return product.itemsMeasures[0];
            }
            return { measures: { abbrev: 'not' } }; 
          }
        );
    };

    const addToCartOrden = () => {
        setPosted(true);
    
        if (size.measures.abbrev === 'not') return;
    
    
        AddProductOrden({
          id: size.id, 
          name: product.name, 
          product_id: product.id, 
          measures_id: size.measures_id, 
          name_measures: size.measures.name, 
          price: size.price, 
          quantity, 
          url: product.productImage[0].url
        });
        
        setPosted(false);
        setQuantity(1);
        setSize(
          () => {
            if (product?.itemsMeasures?.length === 1) {
              return product.itemsMeasures[0];
            }
            return { measures: { abbrev: 'not' } }; 
          }
        );
    };

  return (
    <>
    <div className="flex flex-col md:flex-row md:space-x-8">

        <CarruselProduct images={product.productImage}/>

        <div className="w-full md:w-1/2 mt-6 col-span-1 px-5 space-y-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="mt-4 text-2xl font-bold">S/. {product.base_priece}</div>

          <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity}/>
          
          {posted && size.measures.abbrev === 'not' && (
            <span className="mt-2 text-red-500 fade-in">
              Debe de seleccionar una talla*
            </span>
          )}

          <SizeSelector 
          selectedSize={size.measures.abbrev}
          availableSizes={product.itemsMeasures}
          onSizeChanged={setSize}/>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="whitespace-pre-wrap break-words">
              {product.description}
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <button onClick={addToCartVenta}
            className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              Venta
            </button>
            <button onClick={addToCartOrden}
            className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              Compra
            </button>
          </div>
        </div>
    </div>
   
    </>

  )
}

