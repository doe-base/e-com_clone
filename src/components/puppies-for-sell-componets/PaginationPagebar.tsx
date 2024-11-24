import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const PaginationBar: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pages, setPages] = useState<number[]>([]);

  // Utility to generate the pagination array
  const generatePaginationArray = (current: number, total: number): number[] => {
    if (total <= 7) {
      // If total pages are less than or equal to 7, show all pages
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const result: number[] = [1]; // Always include the first page

    if (current > 4) result.push(-1); // Add ellipsis if necessary

    const start = Math.max(2, current - 2); // Ensure we don't go below 2
    const end = Math.min(current + 2, total - 1); // Ensure we don't go above totalPages - 1

    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    if (current < total - 3) result.push(-1); // Add ellipsis if necessary

    result.push(total); // Always include the last page

    return result;
  };

  useEffect(() => {
    setPages(generatePaginationArray(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent navigation outside valid page range
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", page.toString());
    const updatedSearch = `?${queryParams.toString()}`;
    navigate(`${location.pathname}${updatedSearch}`);
  };

  return (
    <ul className="pagination-pagebar">
      {/* Previous Button */}
      <li>
        <a
          href="javascript:void(0)"
          onClick={() => handleClick(currentPage - 1)}
          className={`arrow pagination--back ${currentPage === 1 ? "hidden" : ""}`}
          rel="prev"
        >
          {/* &laquo; */}
        </a>
      </li>

      {/* Page Numbers */}
      {pages.map((page, index) =>
        page === -1 ? (
          // Render ellipsis for "-1"
          <li key={index} className="pagination-ellipsis">
            ...
          </li>
        ) : (
          <li key={index} className={`${page === currentPage ? "current pagination-pagenumber" : "pagination-pagenumber"}`}>
            <a
              href="javascript:void(0)"
              onClick={() => handleClick(page)}
              data-page={page}
              data-is-current={page === currentPage ? "true" : "false"}
            >
              {page}
            </a>
          </li>
        )
      )}

      {/* Next Button */}
      <li>
        <a
          href="javascript:void(0)"
          onClick={() => handleClick(currentPage + 1)}
          className={`arrow pagination ${currentPage === totalPages ? "hidden" : ""}`}
          rel="next"
        >
          {/* &raquo; */}
        </a>
      </li>
    </ul>
  );
};

export default PaginationBar;
