import { useState } from 'react';
export const User = ({ initialForm, onUserChange, onSubmit}) => {

  const [isPassword, setIsPassword] = useState(false);

  const onUserSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  return (
    <form className='mb-6 dark:text-black' onSubmit={onUserSubmit}>
      <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-4 '>
              <div className='w-full md:w-1/4'>
              <p className="text-gray-600 dark:text-gray-300/90">Nombre <span className="text-red-500">*</span></p>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div className="w-full">
                    <input type="text" 
                    placeholder='Nombre'
                    name="name"
                    value={initialForm.name}
                    onChange={onUserChange}
                    className="w-full px-4 py-2 pl-4
                    pr-4 border rounded-md outline-none" />
                </div>

                <div className="w-full">
                    <input type="text" 
                    placeholder='Apellidos'
                    name="lastname"
                    value={initialForm.lastname}
                    onChange={onUserChange}
                    className="w-full px-4 py-2 pl-4
                    pr-4 border rounded-md outline-none" />
                </div>
              </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Email <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
                <input type="email" 
                className='w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none' 
                placeholder='Email'
                name='email'
                value={initialForm.email}
                onChange={onUserChange}/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Contraseña <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
              <div className='relative'>
                <input type={`${ isPassword ? 'text' :'password'}`}
                className='w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none' 
                placeholder='Password'
                name='password'
                value={initialForm.password}
                onChange={onUserChange}/>

                <i className={`fa-regular 
                ${isPassword ? 'fa-eye-slash' : 'fa-eye'}
                absolute top-1/2 -translate-y-1/2 right-2
                hover:cursor-pointer text-ligth-primary text-opacity-50
                dark:text-dark-primary`}
                onClick={() => setIsPassword(!isPassword)}/>
              </div> 
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Celular <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
                <input type="number" 
                className='w-full px-4 py-2 pl-4
                pr-4 border rounded-md outline-none' 
                placeholder='phone'
                name='phone'
                value={initialForm.phone}
                onChange={onUserChange}/>
            </div>
        </div>

        
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Rol <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1">
              <select 
              name='rolName'
              value={initialForm.rolName}
              onChange={onUserChange}
              className="w-full px-3 py-2 
              border rounded-md outline-none">
                {initialForm.rol.map((rol) => (
                    <option key={rol.id} value={rol.name}>
                        {rol.name}
                    </option>
                ))}
              </select>
            </div>
        </div>
          

        

        <button type="submit"
        className="uppercase font-bold text-sm
        w-full rounded-lg p-2
        bg-ligth-primary text-white bg-opacity-70
        dark:bg-dark-primary">Submit</button>

        </form>
  )
}
