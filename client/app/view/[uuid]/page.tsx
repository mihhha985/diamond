import ViewGallery from "@/component/viewGallery/ViewGallery";
import ViewDescript from "@/component/viewDescript/viewDescript";
import {Contact} from "@/types/contactType";

const GetModelByUuid = async (uuid: string):Promise<Contact> => {
  const res = await fetch(`http://localhost:8000/models/${uuid}`,  { cache: 'no-store' });
  const data = await res.json();
  return data;
}

async function View({ params }: { params: { uuid: string } }) {
  const user = await GetModelByUuid(params.uuid);
  //console.log(user);
  return ( 
    <div>    
      <div className="flex items-center gap-2 w-5/6 lg:w-1/2 mx-auto relative bottom-5 sm:bottom-2">
        <div className="bg-primary w-full h-1 rounded-3xl"></div>
        <h3 className="text-primary text-3xl lg:text-4xl" style={{whiteSpace: 'nowrap'}}>Эскорт Модель</h3>
        <div className="bg-primary w-full h-1 rounded-3xl"></div>
      </div>
      <div className="block lg:grid lg:grid-cols-2 gap-5 h-full w-full p-5 min-h-screen">
        <ViewGallery id={user.description.id} />
        <ViewDescript user={user}/>
      </div>
    </div>
  );
}

export default View;