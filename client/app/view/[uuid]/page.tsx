import ViewGallery from "@/component/viewGallery/ViewGallery";
import ViewDescript from "@/component/viewDescript/viewDescript";
import {Contact} from "@/types/contactType";

const GetModelByUuid = async (uuid: string):Promise<Contact|null> => {
	try{
		const res = await fetch(`${process.env.serverUrl}/models/${uuid}`,  { cache: 'no-store' });
		if(res.status === 200){
			const data = await res.json();
			return data;
		}else{
			return null;
		}
	}catch(e: any){
		throw new Error(e.message);
	}	
}

async function View({ params }: { params: { uuid: string } }) {
  const user = await GetModelByUuid(params.uuid);
	
  if(user){
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
	}else{
		return(
			<div className="w-full h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl font-semibold text-secondary-300">Анкета удаленна или заблокированна!</h1>
			</div>
		)
	}
}

export default View;