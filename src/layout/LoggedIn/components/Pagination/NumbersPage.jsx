import React from 'react'
import { Link } from 'react-router-dom';

export const NumbersPage = ({page, to, isActive, position,}) => {

    return isActive || position === 'middle' ? (
        <div className='flex h-10 w-10 items-center justify-center text-sm border'>{page}</div>
      ) : (
        <Link to={to} className='flex h-10 w-10 items-center justify-center text-sm border'>
          {page}
        </Link>
      );
}
