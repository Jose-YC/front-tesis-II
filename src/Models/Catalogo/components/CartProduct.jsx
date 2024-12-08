import { Link } from 'react-router-dom'

export const CartProduct = ({product}) => {
  return (
    <div>
      <div className="group relative rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg">
        <Link to={`/product/catalogo/${product.id}`} className='relative aspect-square overflow-hidden rounded-lg'>
          <img src={product.productImage[0].url} 
          alt="img del producto" 
          className="h-full w-full object-cover transition-transform group-hover:scale-105"/>
        </Link>

        <div className="mt-4 space-y-2">
          <Link to={`/product/catalogo/${product.id}`} className="text-sm font-medium line-clamp-2">
            {product.name}
          </Link>
          <span className="text-lg font-bold">S/. {product.base_priece}</span>
        </div>
      </div>
    </div>
      
  )
}
