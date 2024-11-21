import React from 'react'
import { DirectionPage } from './DirectionPage';
import { NumbersPage } from './NumbersPage';

export const Paginate = ({allPages, createPageURL, currentPage, totalPages}) => {

  return (
    <div className='inline-flex justify-center'>

        <DirectionPage 
        to={createPageURL(currentPage - 1)}
        direction={'left'} 
        isDisabled={currentPage <= 1}/>

        <div className="flex -space-x-px">
        {allPages.map((page, index) => {
            let position;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
             <NumbersPage key={page}
             page={page} 
             to={createPageURL(page)} 
             isActive={currentPage === page} 
             position={position}/>
            );
          })}
        </div>
        <DirectionPage 
        to={createPageURL(currentPage + 1)} 
        direction={'right'} 
        isDisabled={currentPage >= totalPages}/>
    </div>
  )
}
