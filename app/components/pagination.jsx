"use client";
import React from 'react'
import { useBlogContext } from '../context/blogContext'

export default function Pagination() {

  const { handlePageChange, currentPage, totalPages,blogs } = useBlogContext()

  return (
    <>

      {blogs.length > 0 && (

        <nav className="flex items-center justify-between gap-x-4 mt-28" aria-label="Pagination">
          {/* Previous Button */}
          <div className='items-center'>

            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              className={`min-h-[38px] min-w-[38px] flex items-center gap-x-1 justify-center rounded-lg text-gray-800 hover:bg-gray-100 dark:text-gray-800 focus:outline-none ${currentPage === 1 ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''}`}
              aria-label="Previous"
              disabled={currentPage === 1}
            >
              <svg
                className="text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18L9 12l6-6"></path>
              </svg>
              <span className="text-gray-800">Previous</span>
            </button>
          </div>

          <div className='flex items-center'>


            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1; // Pages are 1-indexed
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`min-h-[38px] min-w-[38px] flex items-center justify-center text-base rounded-lg focus:outline-none hover:bg-blue-50 ${currentPage === page ? "font-semibold bg-blue-50 text-blue-600" : "text-gray-800"
                    }`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>
          {/* Ellipsis */}
          {/* {totalPages > 5 && currentPage < totalPages - 2 && (
    <button
      type="button"
      className="min-h-[38px] min-w-[38px] flex items-center justify-center text-base text-gray-800 hover:bg-gray-100 dark:text-gray-800 rounded-lg focus:outline-none"
      aria-label="More pages"
    >
      ...
    </button>
  )} */}

          {/* Next Button */}
          <div>

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`min-h-[38px] min-w-[38px] flex items-center gap-x-1 justify-center rounded-lg text-gray-800 hover:bg-gray-100 dark:text-gray-800 focus:outline-none ${currentPage === totalPages ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''}`}
              aria-label="Next"
              disabled={currentPage === totalPages}
            >
              <span className="text-gray-800">Next</span>
              <svg
                className="text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </nav>
      )}
    </>
  )
}