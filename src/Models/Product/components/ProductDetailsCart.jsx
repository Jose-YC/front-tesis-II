import React, { useState } from 'react'
import { VariantList } from './VariantList'
import { Link } from 'react-router-dom';

export const ProductDetailsCart = ({product = {}, handleDelete}) => {
    
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4 mb-4">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="flex">
          <div className="w-1/4 min-w-[100px] max-w-[200px]">
            <img src={product.productImage && product.productImage.length > 0 ? product.productImage[0]?.url : 'default-image.jpg'} alt={product.name}  className="w-full h-full object-cover"/>
          </div>
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">
                Categorías: {product.itemsCategory && product.itemsCategory.length > 0 ? product.itemsCategory.map(item => item.category.name).join(', ') : 'no tiene categoria' }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link to={`/product/edit/${product.id}`} className="text-ligth-primary
                p-2 rounded-full hover:text-[#0056b3] 
                dark:text-dark-primary dark:hover:text-[#e85a3a]">
                    <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                
                <div onClick={() => handleDelete(product.id)} 
                className="text-ligth-primary hover:text-[#0056b3] 
                p-2 rounded-full dark:text-[#EE6C4D] 
                dark:hover:text-[#e85a3a]">
                    <i className="fa-regular fa-trash-can"/>
                </div>
            
                <button className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsExpanded(expand => !expand)}>
                  {
                    isExpanded ? (
                      <i className="fa-solid fa-chevron-up"/>
                    ) : (
                      <i className="fa-solid fa-chevron-down"/>
                    )
                  }
                </button>
              </div>
            </div>
            {!isExpanded && (
              <div className="text-right">
                <p className="font-semibold text-gray-700">Precio Base: S/ {product.base_priece}</p>
              </div>
            )}
          </div>
        </div>
        {isExpanded && (
            <VariantList variants={product.itemsMeasures}/>
        )}
      </div>
  </div>
  )
}
