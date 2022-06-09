// Library
import React, { useState, useCallback } from 'react';

// Styles
import './index.css';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageOrder: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = useCallback(
    (number: number) => {
      setCurrentPage(number);
      console.log(currentPage);


      paginate(number);
    },
    [currentPage],
  );


  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number: number) => (
          <li
            key={number}
            className={
              [
                'page-item', `${(currentPage === number) && 'active'}`
              ].join(' ')
            }
            onClick={() => handleClick(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav >
  );
};
