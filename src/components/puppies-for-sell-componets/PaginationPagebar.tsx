import React, { useEffect, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const PaginationBar: React.FC<PaginationProps> = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(5)
    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const [isInBetween, setIsInBetween] = useState(true)
    const [arrayOfNumber, setArrayOfNumber] = useState([2, 3, 4, 5, 6])


    function getCenteredArray(center: number, max: number): number[] {
        const result = [];
        const start = Math.max(center - 2, 2); // Ensure starting number is at least 2
        const end = Math.min(start + 4, max); // Ensure the end doesn't exceed max
      
        // Adjust the start if the end is at the max boundary
        const adjustedStart = Math.max(end - 4, 2);
      
        for (let i = adjustedStart; i <= end; i++) {
          result.push(i);
        }
      
        return result;
      }

    useEffect(()=>{
        if(currentPage < 5){
            setIsAtStart(true)
            setIsInBetween(false)
        }else{
            setIsAtStart(false)
            setIsInBetween(true)
        }

        if(currentPage > (totalPages - 4)){
            setIsAtEnd(true)
            setIsInBetween(false)
        }else{
            setIsAtEnd(false)
            setIsInBetween(true)
        }
    }, [currentPage])

    useEffect(()=>{
        setArrayOfNumber(getCenteredArray(currentPage, totalPages - 1))
    }, [currentPage])


  return (
        <ul className="pagination-pagebar">
            {   isAtStart 
                ? 
                    null 
                : 
                <li className="">
                    <a href={`/puppies-for-sale?page=${currentPage - 1}`} rel="prev" className="arrow pagination--back" data-page={currentPage - 1}></a>
                </li>
            }
                <li className={`${ currentPage === 1 && "current pagination-pagenumber" }`} onClick={()=> setCurrentPage(1)}>
                    <a data-page="1" data-is-current={`${ currentPage === 1 && "true" }`}>
                        1
                    </a>
                </li>
                { isAtStart ? null : <>...</>}

                {
                    arrayOfNumber.map((item, index) => {
                        return(
                            <li key={index} className=" pagination-pagenumber">
                                <a 
                                    href={`/puppies-for-sale?page=${item}`} 
                                    data-page={item} 
                                    data-is-current={`${ currentPage === item ? "true" : 'false' }`}
                                    onClick={()=> setCurrentPage(item)}
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    })
                }


                { isAtEnd ? null : <>...</>}
                <li className={`${ currentPage === totalPages && "current pagination-pagenumber" }`} onClick={()=> setCurrentPage(totalPages)}>
                    <a data-page={totalPages} data-is-current={`${ currentPage === totalPages && "true" }`}>
                        {totalPages}
                    </a>
                </li>

                {   
                    isAtEnd 
                    ? 
                        null 
                    : 
                    <li className="">
                        <a 
                            href={`/puppies-for-sale?sort=search_sort_order+asc&amp;page=${currentPage + 1}`} 
                            className="arrow pagination" 
                            rel="next" 
                            data-page={currentPage + 1}
                        ></a>
                    </li>
                }
        </ul>
  );
};

export default PaginationBar;
