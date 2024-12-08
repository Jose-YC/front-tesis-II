
  import { LayoutPage } from '../../../layout/LoggedIn'
  import { NotificationSystem } from '../../NotificationItem/NotificationSystem'
  import { useRef, useState } from 'react'
  import { useAsync, useAxios, useSaleStore } from '../../../hooks'
import { Fechas } from '../components/Fechas';
import { GraficaOperativo } from '../components/GraficaOperativo'

export const ReportOperativo = () => {

  const [fechaInicio, setFechaInicio] = useState(new Date(Date.UTC(2024, 10, 29)));
  const [fechaFin, setFechaFin] = useState(new Date());
  const [soldItemsAño, setsSoldItemsAño] = useState([]);
  const chartRef = useRef(null);

  
  const { startGetTotalDay } = useSaleStore();
  const { callEndpoint } = useAxios();

  const handleFechaChange = (inicio, fin) => {
      setFechaInicio(inicio);
      setFechaFin(fin);
    };

  const adapterSoldItemsAño = (obj) => {setsSoldItemsAño(obj)};
  const getDataSoldItemsAño = async() => await callEndpoint(
    startGetTotalDay({ 
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

               <GraficaOperativo data={soldItemsAño}/>
            </div>
        </section>
    </LayoutPage>
  )
}
