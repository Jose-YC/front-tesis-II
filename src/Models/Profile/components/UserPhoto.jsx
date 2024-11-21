import { useState } from 'react'

export const UserPhoto = ({img, id}) => {

    const [photoUser, setPhotoUser] = useState( img ? img : 
        'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1708979352/Users/ayuzfuaaawlr1bk5dxca.png');

        const handleImageChange = (e) => {
          if (e.target.files[0]) {
            // startUpdateProfilePhoto({id, user: {img: e.target.files[0], imgAnt: img}})
            
            setPhotoUser(URL.createObjectURL(e.target.files[0]));
          }
        };

  return (
    <form action="">
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-8'>
            <div className='w-1/4'>
            <p className="text-gray-600 dark:text-gray-300/90">Avatar</p>
            </div>
            <div className="flex-1"> 
                <div className="relative mb-2">
                    <img className='w-28 h-28 object-cover rounded-lg'
                    src={photoUser} 
                    alt="user photo" />

                    <label htmlFor="file-upload" 
                    className="absolute rounded-full -top-2 left-24 
                    hover:cursor-pointer p-2
                    bg-ligth-secondary-100
                    text-ligth-primary
                    dark:text-dark-primary
                    dark:bg-dark-secondary-100">
                        <i className="fa-regular fa-pen-to-square"/>
                    </label>
                    <input id="file-upload" type="file" className="hidden" onChange={handleImageChange}/>
                </div>
                <p className='text-gray-400 dark:text-gray-500 text-sm'>
                    Allowed file types: png, jp. y jpeg.
                </p>
            </div>
        </div>
    </form>
    
  )
}
