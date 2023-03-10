import './App.css';
import { Button, Input } from './Components';
import Preview from './Components/Cards/Preview';
import { Books } from './constants';
import { IPreview } from './model';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function App() {
	return (
		<div className="">
			<div className="flex gap-5 justify-center items-center h-screen w-screen flex-col">
				<div className="header w-[80vw] h-[80px] bg-secondaryFaded"></div>
				<div className="flex w-[80vw] gap-5">
					<div className="w-[15vw] h-[70vh] bg-secondaryFaded rounded-sm"></div>
					<div className="w-[48vw] h-[70vh] bg-secondaryFaded rounded-sm"></div>
					<div className="w-[15vw] gap-4 flex overflow-scroll scrollbar-hide flex-col h-[70vh] bg-transparent rounded-sm p-4 border border-outlineFaded shadow-md shadow-secondary">
						{Array(20)
							.fill(0)
							.map(() => (
								<SummaryCard />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

const SummaryCard = () => {
	return (
		<div className="w-full px-2 py-1 shadow-sm bg-secondaryFaded shadow-outlineFaded h-max rounded-md hover:scale-105 transition-all duration-500">
			<h6 className="font-semibold text-typography">Summary 1</h6>
			<div className="flex text-outline justify-end gap-2">
				<div className="flex items-center gap-1">
					<span className="text-[10px]">24</span>
					<AiOutlineLike />
				</div>
				<div className="flex items-center gap-1">
					<span className="text-[10px]">24</span>
					<AiOutlineDislike />
				</div>
			</div>
		</div>
	);
};
