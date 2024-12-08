import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LayoutPage } from '../../layout/LoggedIn'
import { NotificationSystem } from '../NotificationItem/NotificationSystem'
import { SoldItems } from './components/SoldItems'
import { TotalSales } from './components/TotalSales'
import { useState } from 'react'
import { useAsync, useAxios, useSaleStore } from '../../hooks'
import { TotalSalesDay } from './components/TotalSalesDay'
import { TotalSalesSemana } from './components/TotalSalesSemana'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']




export const Dashboard = () => {
  const [soldItems, setSoldItems] = useState([]);
  const [totalSales, setsTotalSales] = useState([]);
  const [soldItemsAño, setsSoldItemsAño] = useState([]);
  const [category, setsCategory] = useState([]);
  const [productsTop, setsProductsTop] = useState([]);
  const [ventaday, setsVentaday] = useState([]);
  const [ventaSemana, setsVentaSemana] = useState([]);

  const { startGetTotalMonth, startGetProductSale, 
    startGetCategoryMonth, startGetProductTop, startGetTotalDay } = useSaleStore();
  const { callEndpoint } = useAxios();

  const adapterVentaDay = (obj) => {setsVentaday(obj);};
  const getDataVentaDay = async() => await callEndpoint(
    startGetTotalDay({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate() + 1, 0, 0, 0, 0))
    }))
  useAsync(getDataVentaDay,adapterVentaDay, () => {}, [], () => {return true})

  const adapterVentaSemana = (obj) => {setsVentaSemana(obj); console.log(obj)};
  const getDataVentaSemana = async() => await callEndpoint(
    startGetTotalDay({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 5 , 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate() + 1, 0, 0, 0, 0))
    }))
  useAsync(getDataVentaSemana,adapterVentaSemana, () => {}, [], () => {return true})


  const adapterSoldItems = (obj) => {setSoldItems(obj)};
  const getDataSoldItems = async() => await callEndpoint(
    startGetTotalMonth({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear() + 1, 0,  1, 0, 0, 0, 0))
    }))
  useAsync(getDataSoldItems,adapterSoldItems, () => {}, [], () => {return true})


  const adapterSoldItemsAño = (obj) => {setsSoldItemsAño(obj)};
  const getDataSoldItemsAño = async() => await callEndpoint(
    startGetTotalMonth({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), 1, 1, 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear() + 1, 1,  1, 0, 0, 0, 0))
    }))
  useAsync(getDataSoldItemsAño,adapterSoldItemsAño, () => {}, [], () => {return true})


  const adapterTotalSales = (obj) => {setsTotalSales(obj)};
  const getDataTotalSales = async() => await callEndpoint(
    startGetProductSale({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear() + 1, 0,  1, 0, 0, 0, 0))
    }))
  useAsync(getDataTotalSales,adapterTotalSales, () => {}, [], () => {return true})


  
  const adapterCategory = (obj) => {setsCategory(obj)};
  const getDataCategory  = async() => await callEndpoint(
    startGetCategoryMonth({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear() + 1, 0,  1, 0, 0, 0, 0))
    }))
  useAsync(getDataCategory,adapterCategory, () => {}, [], () => {return true})


  const adapterProductsTop= (obj) => {setsProductsTop(obj)};
  const getDataProductsTop  = async() => await callEndpoint(
    startGetProductTop({ 
      startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0, 0)), 
      endDate: new Date(Date.UTC(new Date().getFullYear() + 1, 0,  1, 0, 0, 0, 0))
    }))
  useAsync(getDataProductsTop,adapterProductsTop, () => {}, [], () => {return true})


  const totalSalesSem = ventaSemana?.resp?.reduce((acumulador, objetoActual) => {
    return acumulador + (objetoActual.total || 0);
  }, 0);

  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex justify-center dark:bg-dark-secondary-900">
        <NotificationSystem/>
       
        <div className="p-4 space-y-8 bg-gray-100 w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <SoldItems total={totalSales?.resp?.[0]?.total}/>
              <TotalSales total={soldItems?.resp?.[0]?.total}/>
              <TotalSalesSemana total={(Math.round(totalSalesSem * 100) / 100)}/>
              <TotalSalesDay total={ventaday?.resp?.[0]?.total}/>
            </div>
            
              <div className="w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Ventas Mensuales</h2>
                <ResponsiveContainer width="100%" height={300} >
                  <LineChart data={soldItemsAño.resp} margin={{left: 20, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" />
                    <YAxis dataKey="total" unit="S/."/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Distribución de Ventas por Categoría</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={category.resp}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="total"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {category.resp?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
       
            
       
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Productos Más Vendidos</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={productsTop.resp}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total"/>
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
            
  
        </div>
           

            

      </section>
  </LayoutPage>
  )
}
