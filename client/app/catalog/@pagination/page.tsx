"use client";
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import '@/styles/Pagination.css';

function Pagination() {
	const path = usePathname();
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`${process.env.serverUrl}/models/count`)
    .then(res => res.text())
    .then(res => setTotal(parseInt(res)));
  }, []);
  
  const handlePageClick = (e:any) => {
    const selectedPage = e.selected * 9;
    router.push(`/catalog?limit=9&offset=${selectedPage}`);
  }

  if (total > 9 && path === '/catalog') {
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