import React from 'react'

export const DetailsOrden = ({orden = {}}) => {
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Detalle de la Orden de Compra</h1>
                <p className="text-sm text-gray-600">Fecha de entrega: {orden.deliveredAt}</p>
            </div>
            
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Productos</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                        <th className="px-4 py-2">Producto</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Precio</th>
                        <th className="px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orden.items?.map((obj, index) => (
                        <tr key={obj.id} className="bg-white border-b">
                        <td className="px-4 py-2">{obj.product.name} {obj.measures.name}</td>
                        <td className="px-4 py-2">{obj.quantity}</td>
                        <td className="px-4 py-2">S/. {obj.price}</td>
                        <td className="px-4 py-2">S/. {obj.quantity * (obj.price)}</td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Numero de documento</span>
                                <span>{orden.proveedor.ruc }</span> 
                            </div>
                            <div className="flex justify-between">
                                <span>Proveedor</span>
                                <span> {orden.proveedor.repre }</span> 
                            </div>
                            <div className="flex justify-between">
                                <span>Cantidad de Productos</span>
                                <span> {orden.itemsInOrder }</span>
                            </div>
                           
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>S/. {orden.total }</span>
                                </div>
                                </div>
                                <h2 className="text-xl font-semibold mt-6 mb-4">Estado del Pedido</h2>
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                                    {orden.state}
                                </span>
                                </div>
                            </div>
                        <div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
