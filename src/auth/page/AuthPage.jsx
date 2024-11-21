import { useState } from 'react';
import { LogInPage } from '../../layout/LogIn';
import { Login } from '../components/Login';
import { Register } from '../components/Register';


export const AuthPage = () => {

  const [fromAuth, setFromAuth] = useState(true);
  
  return (
    <LogInPage>
       <div className={`rounded-xl text-center
       ${fromAuth? 'w-auto lg:w-[400px]' : ''} 
       shadow-2xl bg-ligth-secondary-100 
       dark:bg-dark-secondary-100 p-8
       `}>
          <h1 className='text-3xl uppercase font-bold 
          tracking-[5px] mb-5 dark:text-white'>{fromAuth ? 'Log in' : 'Register'}</h1>

         {fromAuth ? <Login/> : <Register/>}

         <div className='flex flex-col items-center 
          gap-4 mb-5 dark:text-white'>
            <span className='flex items-center gap-2'>
              ¿No tienes cuenta? 
              <button onClick={() => setFromAuth(!fromAuth)}
              className='text-ligth-primary 
              dark:text-dark-primary'>{fromAuth ? 'Register' : 'Log in'}</button>
            </span> 
          </div>
      </div>
    </LogInPage>
   
  )
}
