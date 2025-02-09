"use client"
import Link from "next/link";
import Image from "next/image";
import RaitinStars from "../raitinStars/RaitingStars";

type ItemProps = {id: number, name: string, age: number, uuid: string, rating: number, offset:string};

function CatalogItem({id, name, age, uuid, rating, offset}: ItemProps) {
  return ( 
    <div 
			className="bg-primary rounded-2xl overflow-hidden transition-shadow duration-500 
      border border-secondary-200 shadow-2xl shadow-secondary-200 hover:shadow-none relative mb-10 md:mb-0">
      <Link href={'/view/' + uuid + '/' + offset} className="cursor-pointer relative block w-full h-96">
        <Image 
          src={`${process.env.serverUrl}/${id}/ava.jpg`}
          alt={name}
          fill={true}
          priority={true}
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
          <RaitinStars rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;