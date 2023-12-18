import Header from '@/component/header/Header';

export default function Template({ children }: { children: React.ReactNode }) {
	
  return (
		<div className="wrapper">
    	<div className="App">
				<Header />
				{children}
			</div>
    </div>
  );
}