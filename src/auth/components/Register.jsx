import React, { useEffect, useState } from 'react'
import { useAuthStore, useForm } from '../../hooks';

const RegisterForm = {
  email: '',
  password: '',
  passwordConfir: '',
  name: '',
  lastname: '',
  phone: '',
};

export const Register = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConf, setIsPasswordConf] = useState(false);

  const { startRegister } =  useAuthStore();
  const {email, password, passwordConfir, lastname, name, phone, onInputChange:onRegisterChange} = useForm(RegisterForm);
   

  const RegisterSubmit = (event) => {
    event.preventDefault();

    startRegister({email, password, passwordConfir, lastname, name, phone});
  }
  return (
   <>
    <form className='mb-6 dark:text-black text-left' onSubmit={RegisterSubmit}>
      <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8 '>
              <div className='w-full md:w-1/4'>
              <p className="text-gray-600 dark:text-gray-300/90">Full Name <span className="text-red-500">*</span></p>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div className="w-full">
                    <input type="text" 
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={onRegisterChange}
                    className="w-full py-1.5 px-4 rounded-lg outline-none
                    bg-opacity-65 bg-ligth-secondary-400
                    dark:bg-white dark:text-black" />
                </div>

                <div className="w-full">
                    <input type="text" 
                    placeholder='Last Name'
                    name="lastname"
                    value={lastname}
                    onChange={onRegisterChange}
                    className="w-full py-1.5 px-4 rounded-lg outline-none
                    bg-opacity-65 bg-ligth-secondary-400
                    dark:bg-white dark:text-black" />
                </div>
              </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
          <div className='w-full md:w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Email<span className="text-red-500">*</span></p>
          </div>
          <div className="flex-1">
            <input type="email" 
            placeholder='Email'
            name="email"
            value={email}
            onChange={onRegisterChange}
            className="w-full py-1.5 px-4 rounded-lg outline-none
            bg-opacity-65 bg-ligth-secondary-400
            dark:bg-white dark:text-black border-transparent" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
          <div className='w-full md:w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Phone Number <span className="text-red-500">*</span></p>
          </div>
          <div className="flex-1">
            <input type="number" 
            placeholder='Phone'
            name="phone"
            value={phone}
            onChange={onRegisterChange}
            className="w-full py-1.5 px-4 rounded-lg outline-none
            bg-opacity-65 bg-ligth-secondary-400
            dark:bg-white dark:text-black border-transparent" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
          <div className='w-full md:w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Password <span className="text-red-500">*</span></p>
          </div>
          <div className="relative flex-1">
            <input type={`${ isPassword ? 'text' :'password'}`}
            placeholder='Password'
            name="password"
            value={password}
            onChange={onRegisterChange}
            className="w-full py-1.5 px-4 rounded-lg outline-none
            bg-opacity-65 bg-ligth-secondary-400
            dark:bg-white dark:text-black border-transparent" />
            <i className={`fa-regular 
              ${isPassword ? 'fa-eye-slash' : 'fa-eye'}
              absolute top-1/2 -translate-y-1/2 right-2
              hover:cursor-pointer text-ligth-primary text-opacity-50
              dark:text-dark-primary`}
              onClick={() => setIsPassword(!isPassword)}/>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
          <div className='w-full md:w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Password <span className="text-red-500">*</span></p>
          </div>
          <div className="relative flex-1">
            <input type={`${ isPasswordConf ? 'text' :'password'}`}
            placeholder='Confirm Password'
            name="passwordConfir"
            value={passwordConfir}
            onChange={onRegisterChange}
            className="w-full py-1.5 px-4 rounded-lg outline-none
            bg-opacity-65 bg-ligth-secondary-400
            dark:bg-white dark:text-black border-transparent" />
            <i className={`fa-regular 
              ${isPasswordConf ? 'fa-eye-slash' : 'fa-eye'}
              absolute top-1/2 -translate-y-1/2 right-2
              hover:cursor-pointer text-ligth-primary text-opacity-50
              dark:text-dark-primary`}
              onClick={() => setIsPasswordConf(!isPasswordConf)}/>
          </div>
        </div>

        <button type="submit"
        className="uppercase font-bold text-sm
        w-full rounded-lg p-2
        bg-ligth-primary text-white bg-opacity-70
        dark:bg-dark-primary">Submit</button>

    </form>
    </>
  )
}
