import React, { useState } from 'react'

export const Tag = ({
  value,
  name,
  tags = [], 
  suggestions = [], 
  onChange= () => {}, 
  set = () => {}, 
  remove = () => {}, 
}) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && value === '' && tags.length > 0) {
      remove(tags[tags.length - 1].id)
    }
  }

  return (

    <>
    <div className='relative w-full'>
      <div className="relative w-full items-center flex-wrap gap-2 p-2 bg-white border 
      border-gray-300 rounded-md px-4 py-2 
      pr-4 outline-none dark:border-gray-600">
          {tags.map((tag) => (
            <span key={(tag.name)}className="inline-flex items-center bg-ligth-primary
            text-ligth-primary bg-opacity-25 text-xs px-2 py-1 transition-all duration-200 ease-in-out 
            rounded-full text-black dark:bg-dark-primary dark:bg-opacity-25 dark:text-dark-primary">
              {tag.name}
              <button type='button'
              className="ml-1 focus:outline-none"
              onClick={() => remove(tag.category_id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </span>
          ))}
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            className="flex-grow rounded-lg outline-none pl-3
            bg-white text-sm border-transparent"/>
        </div>

          <div className={`absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border 
          border-gray-200 max-h-[300px] overflow-y-auto
            ${ suggestions.length > 0 && value.length > 0 ? 'block' : 'hidden' }
            transition-all duration-1000 ease-in-out`}>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="p-3 transition-colors 
              duration-150 ease-in-out cursor-pointer hover:bg-gray-50"
              onClick={() => set({name: suggestion.name, id: suggestion.id})}>
                <div className="text-sm dark:text-black">{suggestion.name}</div>
                  {suggestion.description && (
                      <div className="mt-1 text-xs text-gray-600">
                          {suggestion.description}
                      </div>
                  )}
                </div>
            ))}
          </div>
    </div>

    </>

  )
}
