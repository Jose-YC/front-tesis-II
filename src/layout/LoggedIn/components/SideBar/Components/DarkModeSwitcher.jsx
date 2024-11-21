import { useThema } from "../../../../../hooks";

export const DarkModeSwitcher = () => {
 const {colorMode, handleChangeTheme} = useThema();

  return (

  <>
    <button className="flex w-16 h-8 rounded-full
    cursor-pointer relative bg-slate-200 transition-colors
    dark:bg-slate-700" 
    role="switch" type="button" onClick={handleChangeTheme}>

      <span className={`w-2/5 h-4/5 bg-white rounded-full
      absolute top-0.5 ${colorMode === 'light' ? "transform translate-x-full left-3" : "left-0.5"} 
      
      transition-all duration-300 ease-in-ou `}>
        <i className={`fa-regular 
        ${colorMode === 'light' ? "fa-sun" : "fa-moon"}
        dark:text-dark-secondary-100`}/> 
      </span>

    </button>
  
  </>
         
  )
}
