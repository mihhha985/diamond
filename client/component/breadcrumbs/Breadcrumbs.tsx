import Link from "next/link";
import { CgFormatSlash } from "react-icons/cg";

function Breadcrumbs({ offset, name }: { offset: string, name:string}) {
	if(offset !== undefined && name){
		return ( 
			<div className="flex items-center gap-2 px-5 py-1 mx-5 bg-primary rounded-lg">
				<Link
					className="text-secondary-300 text-lg font-link hover:underline" 
					href={'/catalog'}>
					Каталог моделей
				</Link>
				<CgFormatSlash className="text-secondary-300 text-lg font-link" />
				<p className="text-secondary-300 text-lg font-link">{name}</p>
				<CgFormatSlash className="text-secondary-300 text-lg font-link" />
				<Link
					className="text-secondary-300 text-lg font-link hover:underline" 
					href={`/catalog?offset=${offset}`}>
					Назад
				</Link>
			</div>
		);
	}
}

export default Breadcrumbs;