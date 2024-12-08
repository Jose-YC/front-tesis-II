import { format } from 'date-fns';

export const Fechas = ({ fechaInicio, fechaFin ,handleFechaChange}) => {
  return (
    <>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1"> Fecha Inicio </label>
                    <input
                    type="date"
                    value={format(fechaInicio, 'yyyy-MM-dd')}
                    onChange={(e) => handleFechaChange(new Date(e.target.value), fechaFin)}
                    className="block w-full rounded-md 
                    border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha Fin
                    </label>
                    <input
                    type="date"
                    value={format(fechaFin, 'yyyy-MM-dd')}
                    onChange={(e) => handleFechaChange(fechaInicio, new Date(e.target.value))}
                    className="block w-full rounded-md border-gray-300 
                    shadow-sm"
                    />
                </div>
    </>
  )
}
