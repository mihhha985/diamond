import CatalogItem from "@/component/catalogItem/CatalogItem";
import AlertModal from "@/component/Modal/AlertModal";
import ProfileModal from "@/component/Modal/ProfileModale";
import MailerModal from "@/component/Modal/MailerModal";

const getModels = async (limit:string | undefined, offset:string | undefined) => {
  //console.log(limit, offset);
  let currentLimit = 9;
  let currentOffset = 0;
  if (limit !== undefined) {
    currentLimit = parseInt(limit);
  }

  if (offset !== undefined) {
    currentOffset = parseInt(offset);
  }
  const res = await fetch(`http://localhost:8000/models?limit=${currentLimit}&offset=${currentOffset}`,  { 
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

async function Catalog({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) {
  let limit = undefined;
  let offset = undefined;
  if (searchParams.limit !== undefined) {
    limit = searchParams.limit as string;
  }
  if (searchParams.offset !== undefined) {
    offset = searchParams.offset as string;
  }
  const user = await getModels(limit, offset);
  return ( 
    <div className="relative">
      <div className="catalog-container">
        <h3 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 mt-2 sm:mt-0">Каталог Моделей</h3>
        <div className="blok md:grid md:grid-cols-2 xl:grid-cols-3 w-full gap-2 md:gap-5 lg:gap-20 xl:gap-10">
          {user?.map((item:any) => (
            <CatalogItem 
              key={item.id} 
              id={item.description.id}
              name={item.firstName}
              uuid={item.uuid}
              age={item.description.age} 
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <AlertModal />
      <ProfileModal />
      <MailerModal />
    </div>
  );
}

export default Catalog;