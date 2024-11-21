
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore, useForm } from '../../hooks';

const loginForm = {
  email: '',
  password: ''
};

export const Login = () => {
  const [isPassword, setIsPassword] = useState(false);

  const { startLogin } =  useAuthStore();
  const {email, password, onInputChange:onLoginChange} = useForm(loginForm);
  

  const loginSubmit = (event) => {
    event.preventDefault();

    startLogin({email, password});
  }


  return (
    <>
      <form className='mb-6 dark:text-black' onSubmit={loginSubmit}>

        <div className='relative mb-4'>
          <i className="fa-solid fa-envelope
          absolute top-1/2 -translate-y-1/2 
          left-3 text-ligth-primary text-opacity-50
          dark:text-dark-primary"/>

          <input type="email" 
          className='w-full bg-ligth-secondary-400 py-2 pl-10 
          pr-4 rounded-lg outline-none' 
          placeholder='Email'
          name='email'
          value={email}
          onChange={onLoginChange}/>
        </div>

        <div className='relative mb-8'>
          <i className="fa-solid fa-lock 
          absolute top-1/2 -translate-y-1/2
          left-3 text-ligth-primary text-opacity-50
          dark:text-dark-primary"/>

          <input type={`${ isPassword ? 'text' :'password'}`}
          className='w-full bg-ligth-secondary-400 py-2 pl-10 
          pr-4 rounded-lg outline-none' 
          placeholder='Password'
          name='password'
          value={password}
          onChange={onLoginChange}/>

          <i className={`fa-regular 
          ${isPassword ? 'fa-eye-slash' : 'fa-eye'}
          absolute top-1/2 -translate-y-1/2 right-2
          hover:cursor-pointer text-ligth-primary text-opacity-50
          dark:text-dark-primary`}
          onClick={() => setIsPassword(!isPassword)}/>
        </div>   


        <button type="submit"
        className="uppercase font-bold text-sm
        w-full rounded-lg p-2
        bg-ligth-primary text-white bg-opacity-70
        dark:bg-dark-primary">Submit</button>

      </form>

      <div className='flex flex-col items-center 
      gap-4 mb-5 dark:text-white'>
        <Link to={'/auth/password'} 
        className='hover:text-ligth-primary 
        dark:hover:text-dark-primary
        text-opacity-70
        transition-colors'>
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </>
      
  )
}
