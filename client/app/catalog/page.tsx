import CatalogItem from "@/component/catalogItem/CatalogItem";
import AlertModal from "@/component/Modal/AlertModal";
import ProfileModal from "@/component/Modal/ProfileModale";
import MailerModal from "@/component/Modal/MailerModal";

const getModels = async (offset:string | undefined) => {
  let currentOffset = 0;
  if (offset !== undefined) {
    currentOffset = parseInt(offset);
  }
  const res = await fetch(`${process.env.serverUrl}/models?offset=${currentOffset}`,  { 
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

async function Catalog({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) {
  const offset = searchParams.offset as string;
  const user = await getModels(offset);
  
  return ( 
		<>
      <div className="catalog-container" id="catalog-container">
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
							offset={offset}
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

export default Catalog;