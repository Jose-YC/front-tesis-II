import { useUserStore } from '../../../hooks';
import { useForm } from '../../../hooks/useForm';
  
export const UserProfile = ({user}) => {
    const { name, lastname, phone, onInputChange:onChangeProfile } = useForm(user);
    const { startUpdateProfile } = useUserStore();

    const handlesubmit = ( event ) => {
        event.preventDefault();
        startUpdateProfile({id: user.uid, lastname, name, phone});
      };
    
  return (
    <form action="" onSubmit={handlesubmit}>
        <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8'>
            <div className='w-full md:w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Nombre <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                  <input type="text" 
                  name="name"
                  value={name}
                  onChange={onChangeProfile}
                  className="w-full py-1.5 px-4 rounded-lg outline-none
                  bg-opacity-65 bg-ligth-secondary-400
                  dark:bg-white dark:text-black" />
              </div>

              <div className="w-full">
                  <input type="text" 
                  name="lastname"
                  value={lastname}
                  onChange={onChangeProfile}
                  className="w-full py-1.5 px-4 rounded-lg outline-none
                  bg-opacity-65 bg-ligth-secondary-400
                  dark:bg-white dark:text-black" />
              </div>
            </div>
      </div>

      <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
        <div className='w-full md:w-1/4'>
          <p className="text-gray-600 dark:text-gray-300/90">Numero de celular <span className="text-red-500">*</span></p>
        </div>
        <div className="flex-1">
          <input type="number" 
          name="phone"
          value={phone}
          onChange={onChangeProfile}
          className="w-full py-1.5 px-4 rounded-lg outline-none
          bg-opacity-65 bg-ligth-secondary-400
          dark:bg-white dark:text-black border-transparent" />
        </div>
      </div>

      <hr className='my-8 border-gray-400/30 dark:border-gray-500/50'/>

      <div className="flex justify-end">
        <input type="submit" placeholder="SAVE" 
        className="rounded-lg py-2 px-4
        bg-ligth-primary/70 text-white
        dark:bg-dark-primary/70 transition-colors" />
      </div>
    </form>
  )
}
