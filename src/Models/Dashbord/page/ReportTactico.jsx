
import { LayoutPage } from '../../../layout/LoggedIn'
import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
import { useState } from 'react'
import { useAsync, useAxios, useSaleStore } from '../../../hooks'
import { generateBalancedColors } from '../../../helpers/colorsGenerate';
import { Fechas } from '../components/Fechas';
import { GraficaTactico } from '../components/GraficaTactico';

export const ReportTactico = () => {
  const [fechaInicio, setFechaInicio] = useState(new Date(Date.UTC(2024, 11, 4)));
  const [fechaFin, setFechaFin] = useState(new Date(Date.UTC(2024, 11, 5)));
  const [soldItemsAño, setsSoldItemsAño] = useState([]);
  const [COLORS, setsCOLORS] = useState([]);
  const { startGetCategoryMonth } = useSaleStore();
  const { callEndpoint } = useAxios();

  const handleFechaChange = (inicio, fin) => {
      setFechaInicio(inicio);
      setFechaFin(fin);
    };

  const adapterSoldItemsAño = (obj) => {
    setsSoldItemsAño(obj);
    setsCOLORS(generateBalancedColors(obj.resp?.length));
  };
  const getDataSoldItemsAño = async() => await callEndpoint(
    startGetCategoryMonth({ 
      startDate: fechaInicio, 
      endDate: fechaFin
    }))
  useAsync(getDataSoldItemsAño,adapterSoldItemsAño, () => {}, [fechaInicio, fechaFin], () => {return true})


  return (
    <LayoutPage>
    <section className="h-[91vh] relative overflow-y-auto p-8 bg-ligth-secondary-400 flex 
    items-center justify-center dark:bg-dark-secondary-900">
        <NotificationSystem/>
        <div className='rounded-xl overflow-hidden
        flex flex-col w-full
        shadow-2xl bg-ligth-secondary-100 dark:bg-dark-secondary-100 p-8'>

            <div className="flex gap-4 items-center p-4 rounded-lg shadow-sm">
               <Fechas fechaFin={fechaFin} fechaInicio={fechaInicio} handleFechaChange={handleFechaChange}/>
            </div>

            <GraficaTactico data={soldItemsAño} COLORS={COLORS}/>

            
        </div>
    </section>
</LayoutPage>
  )
}
