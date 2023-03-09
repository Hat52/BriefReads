import './App.css';
import { Button, Input } from './Components';
import Preview from './Components/Cards/Preview';
import { Books } from './constants';
import { IPreview } from './model';

function App() {
	return (
		<div className="">
			<div className="flex gap-5 justify-center items-center h-screen w-screen flex-col">
				<div className="header w-[80vw] h-[80px] bg-secondaryFaded"></div>
				<div className="flex w-[80vw] gap-5">
					<div className="w-[15vw] h-[70vh] bg-secondaryFaded rounded-sm"></div>
					<div className="w-[48vw] h-[70vh] bg-secondaryFaded rounded-sm"></div>
					<div className="w-[15vw] h-[70vh] bg-secondaryFaded rounded-sm"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
