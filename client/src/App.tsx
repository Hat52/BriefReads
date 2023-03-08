import './App.css';
import { Button, Input } from './Components';
import Preview from './Components/Cards/Preview';
import { Books } from './constants';
import { IPreview } from './model';

function App() {
	return (
		<div className="">
			<div className="main-container flex flex-col gap-10 px-5">
				<div className="flex justify-center items-center w-full h-[70px] border-b border-outline">
					<h1 className="text-typography text-2xl">BriefBooks</h1>
				</div>
				<div className="w-full flex justify-center gap-5 ">
					<Input
						placeholder="Search for book!!"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
					/>
					<Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {}}>Search</Button>
				</div>
				<div className="w-full px-20 flex gap-10 flex-wrap pb-10">
					{Books.map((data: IPreview) => {
						return <Preview {...data} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
