import { useState } from "react"

export const InputSearch = ( {
  value='',
  name, 
  className,
  placeholder,
  suggestions = [],
  onChange= () => {}, 
  set = () => {}, 
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (option) => {
    set(option);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative">

      <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className= {className}
      placeholder={placeholder} 
      onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 max-h-24 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
          {suggestions.length > 0 ? (
            suggestions.map((option, index) => (
              <li key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOption(option)}>
               {option.name ? option.name : option.repre}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No encontrado</li>
          )}
        </ul>
      )}
    </div>
  )
}
