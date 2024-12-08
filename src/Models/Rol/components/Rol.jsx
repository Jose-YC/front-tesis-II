export const Rol = ({ initialForm, onRolChange, onSubmit}) => {

  const onRolSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className='mb-6 dark:text-black' onSubmit={onRolSubmit}>
        <div className='flex flex-col md:flex-row md:items-center gap-y-2 mb-4'>
            <div className='w-full md:w-1/4'>
                <p className="text-gray-600 dark:text-gray-300/90">Nombre <span className="text-red-500">*</span></p>
            </div>
        <div className="flex-1">
          <input type="text" 
          name="name"
          placeholder="Nombre"
          value={initialForm.name}
          onChange={onRolChange}
          className="w-full px-4 py-2 pl-4
          pr-4 border rounded-md outline-none" />
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
