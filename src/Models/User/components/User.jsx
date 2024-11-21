import { useState } from 'react';
export const User = ({ initialForm, onUserChange, onSubmit}) => {

  const [isPassword, setIsPassword] = useState(false);

  const onUserSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  return (
    <form className='mb-6 dark:text-black' onSubmit={onUserSubmit}>
      <div className='relative mb-4'>
        <i className="fa-solid fa-user
        absolute top-1/2 -translate-y-1/2 
        left-3 text-ligth-primary text-opacity-50
        dark:text-dark-primary"/>

        <input type="text" 
        className='w-full bg-ligth-secondary-400 py-2 pl-10 
        pr-4 rounded-lg outline-none' 
        placeholder='Name'
        name='name'
        value={initialForm.name}
        onChange={onUserChange}/>
      </div>

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
        value={initialForm.email}
        onChange={onUserChange}/>
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
        value={initialForm.password}
        onChange={onUserChange}/>

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
  )
}
