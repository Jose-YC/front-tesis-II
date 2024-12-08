import React, { useRef, useState } from 'react'
import {  PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { downloadPDF, generateBalancedColors } from '../../../helpers';
import { ReportTacticoPDF } from '../../../PDF';
export const GraficaTactico = ({data = [], COLORS = []}) => {
    const chartRef = useRef(null);

    const handleDownload = async () => {
        try {
          await downloadPDF({
            chartRef,
            PDFComponent: ReportTacticoPDF,
            fileName: 'report-tactico',
            props: { report: data }
          });
        } catch (error) {
          console.error('Error downloading PDF:', error);
          // Handle the error (e.g., show an error message to the user)
        }
      };
  return (
    <>
        <div className='flex flex-col gap-3'>
            <div ref={chartRef} className="p-6 bg-ligth-secondary-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Distribución de Ventas por Categoría</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                    <Pie
                        data={data.resp}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="total"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.resp?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
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
    </>
    )
}
