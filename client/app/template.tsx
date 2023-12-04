import Header from '@/component/header/Header';

export default function Template({ children }: { children: React.ReactNode }) {
	console.log(`${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/send/anketa`);
  return (
		<div className="wrapper">
    	<div className="App">
				<Header />
				{children}
			</div>
    </div>
  );
}