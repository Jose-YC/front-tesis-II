import React from 'react'
import { Link } from 'react-router-dom';

export const DirectionPage = ({ to, direction, isDisabled }) => {
    
    const icon = direction === 'left' ? 
    (<i className="fa-solid fa-angle-left w-4"></i>) : (
    <i className="fa-solid fa-angle-right w-4"></i> );

    return isDisabled ? (
        <div className={`flex h-10 w-10 items-center 
        justify-center rounded-md border pointer-events-none 
        text-gray-300 ${direction === 'left' ? 'mr-2 md:mr-2' : 'ml-2 md:ml-2'}`}>
            {icon}
        </div>
      ) : (
        <Link to={to} 
        className={`flex h-10 w-10 items-center rounded-md
          justify-center border hover:bg-gray-100
        ${direction === 'left' ? 'mr-2 md:mr-2' : 'ml-2 md:ml-2'}`}>
            {icon}
        </Link>
      );
}
