import {  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useRef } from 'react';
import { downloadPDF } from '../../../helpers';
import { ReportEstrategicoPDF } from '../../../PDF';
export const GraficaEstrategico = ({data = []}) => {
    const chartRef = useRef(null);
    const handleDownload = async () => {
        try {
          await downloadPDF({
            chartRef,
            PDFComponent: ReportEstrategicoPDF,
            fileName: 'report-estrategico',
            props: { report: data.resp }
          });
        } catch (error) {
          console.error('Error downloading PDF:', error);
          // Handle the error (e.g., show an error message to the user)
        }
      };
  return (
    <div className='flex flex-col gap-3'>
            <div ref={chartRef} className="p-6 bg-ligth-secondary-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Ventas Mensuales</h2>
                <ResponsiveContainer width="100%" height={300} >
                    <LineChart data={data.resp} margin={{left: 20,  right: 20}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fecha" />
                        <YAxis dataKey="total" unit="S/."/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleDownload}
                    className="group flex items-center gap-2 
                    px-6 bg-ligth-primary text-white bg-opacity-56
                    dark:bg-dark-primary
                    py-3 rounded-lg font-medium shadow-lg hover:shadow-xl 
                    transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
                    <span>Descargar PDF</span>
                </button>           
            </div>
            
        </div>
  )
}
