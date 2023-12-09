import Link from "next/link";
import Image from "next/image";
import { FaStarHalfStroke, FaStar  } from "react-icons/fa6";

function CatalogItem({id, name, age, uuid, rating, offset}: {id: number, name: string, age: number, uuid: string, rating: number, offset:string}) {
  return ( 
    <div className="bg-primary rounded-2xl overflow-hidden transition-shadow duration-500 
      border border-secondary-200 shadow-2xl shadow-secondary-200 hover:shadow-none relative mb-10 md:mb-0">
      <Link href={'/view/' + uuid + '/' + offset} className="cursor-pointer relative block w-full h-96">
        <Image 
          src={`http://localhost:8000/${id}/ava.jpg`}
          alt={name}
          fill={true}
          sizes="100%"
          className="object-cover"
        />
      </Link>
      <div className='flex justify-between items-center'>
        <div className="m-2 sm:m-5 text-secondary-200">
          <div className="font-bold text-lg text-secondary-200">{name}</div>
          <div className="text-base text-secondary-300">Возраст: {age} лет</div>
        </div>
        <div className="flex flex-col m-2 sm:m-5 text-right">
          <h4 className='font-bold text-lg text-secondary-200 mb-2'>Рейтинг: {rating}</h4>
          <div className='flex gap-1 sm:gap-2'>
            <FaStar color="#655166" />
            <FaStar color="#655166"/>
            <FaStar color="#655166"/>
            <FaStar color="#655166"/>
            <FaStarHalfStroke color="#655166"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;