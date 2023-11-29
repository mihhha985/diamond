"use client";
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import '@/styles/Pagination.css';

function Pagination() {
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/models/count')
    .then(res => res.text())
    .then(res => setTotal(parseInt(res)));
  }, []);
  
  const handlePageClick = (e:any) => {
    const selectedPage = e.selected * 9;
    router.push(`/catalog?limit=9&offset=${selectedPage}`);
  }

  if (total > 9) {
    return ( 
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(total / 9)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  }
}

export default Pagination;