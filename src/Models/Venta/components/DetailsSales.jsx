import React from 'react'

export const DetailsSales = ({sale = {}}) => {
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Detalle de Compra</h1>
                <p className="text-sm text-gray-600">Fecha: {sale.createdAt}</p>
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
                    {sale.items?.map((obj, index) => (
                        <tr key={obj.id} className="bg-white border-b">
                        <td className="px-4 py-2">{obj.product.name} {obj.measures.name}</td>
                        <td className="px-4 py-2">{obj.quantity}</td>
                        <td className="px-4 py-2">S/. {obj.price + obj.income}</td>
                        <td className="px-4 py-2">S/. {obj.quantity * (obj.price + obj.income)}</td>
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
                                <span>{sale.client.num_doc }</span> 
                            </div>
                            <div className="flex justify-between">
                                <span>Cliente</span>
                                <span> {sale.client.name }</span> 
                            </div>
                            <div className="flex justify-between">
                                <span>Cantidad de Productos</span>
                                <span> {sale.itemsInVenta }</span>
                            </div>
                           
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>S/. {sale.subTotal }</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Impuestos</span>
                                <span>S/. {sale.tax }</span>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>S/. {sale.total }</span>
                                </div>
                                </div>
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
