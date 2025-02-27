"use client"
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import CatalogItem from "@/component/catalogItem/CatalogItem";
import AlertModal from "@/component/Modal/AlertModal";
import ProfileModal from "@/component/Modal/ProfileModale";
import MailerModal from "@/component/Modal/MailerModal";
import {Contact} from "@/types/contactType";

function Favorites() {
	const router = useRouter();
  const [user, setUser] = useState<Contact[] | []>([]);

  useEffect(() => {
    const ids = localStorage.getItem('favorites');
    if(!ids) router.push('/catalog');
    fetch(`${process.env.serverUrl}/models/favorites?ids=${ids}`,  {
      cache: 'no-cache',
    })
    .then(result => result.json())
    .then(result => {
      setUser(result);
    })
		.catch(error => {
      console.log(error);
			router.push('/catalog');
		});
  }, []);
  
  if(user.length > 0){
    return ( 
      <>
        <div className="catalog-container">
          <h3 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 mt-2 sm:mt-0">Каталог Моделей</h3>
          <div className="blok md:grid md:grid-cols-2 xl:grid-cols-3 w-full gap-2 md:gap-5 lg:gap-20 xl:gap-10">
            {user?.map((item:any) => (
              <CatalogItem 
                key={item.id} 
                id={item.description.id}
                name={item.firstName}
                uuid={item.uuid}
                age={24} 
                rating={item.rating}
								offset='0'
              />
            ))}
          </div>
        </div>
        <AlertModal />
        <ProfileModal />
        <MailerModal />
      </>
    );
  }
}

export default Favorites;