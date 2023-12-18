"use client";
import {useState, useEffect} from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import '@/styles/Pagination.css';

function Pagination() {
	const path = usePathname();
	const param = useSearchParams();
	const offset = param.get('offset');
  const router = useRouter();
  const [total, setTotal] = useState<number>(0);
	const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch(`${process.env.serverUrl}/models/count`)
    .then(res => res.text())
    .then(res => setTotal(parseInt(res)));
  }, []);

	useEffect(() => {
    let container = document.getElementById('catalog-container');
    if(container) container.scrollTo(0, 0);
    
		if(offset){
			try{
				let num = Math.trunc(parseInt(offset) / 9);
				setCount(num);
			}catch(err){
				console.log(err);
			}
		}
	}, [offset]);
  
  const handlePageClick = (e:any) => {
    const selectedPage = e.selected * 9;
    router.push(`/catalog?offset=${selectedPage}`);
  }

  if (total > 9 && path === '/catalog') {
    return ( 
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={Math.ceil(total / 9)}
          previousLabel="<"
          renderOnZeroPageCount={null}
					initialPage={count}
        />
      </div>
    );
  }
}

export default Pagination;