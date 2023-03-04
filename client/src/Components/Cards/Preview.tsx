import { useState } from 'react';
import Cover from '../../assets/Images/cover.jpg';
import { IPreview } from '../../model';

export default function Preview({ name, author, publishedDate, description }: IPreview) {
	const [showCard, setShowCard] = useState(false);

	return (
		<div className={!showCard ? 'relative' : ''}>
			<MainCard showCard={showCard} setShowCard={setShowCard} />
			<div
				onClick={() => setShowCard(true)}
				className="bg-[#393E4660] w-[300px] z-10 gap-4 h-[380px] rounded-md flex flex-col p-2 hover:scale-105 cursor-default transition-scale duration-500">
				<img
					src={Cover}
					alt="book cover"
					className="w-full h-1/2 object-cover rounded-sm opacity-50"
				/>
				<h3 className="text-outline text-center text-lg -mt-3">{name}</h3>
				<div className="flex flex-col gap-1">
					<CardItem title="Author" description={author} />
					<CardItem title="Published" description={publishedDate} />
				</div>
				<div>
					<p className="truncate-3-lines text-sm text-typography">{description}</p>
				</div>
			</div>
		</div>
	);
}

interface ICardItem {
	title: string;
	description: string;
}

const CardItem = ({ title, description }: ICardItem) => {
	return (
		<div className="flex justify-between items-center">
			<h6 className="text-outline capitalize font-bold">{title}</h6>
			<p className="text-typography text-[14px] font-light capitalize">{description}</p>
		</div>
	);
};

const MainCard = ({ showCard, setShowCard }: any) => {
	return (
		<div
			onClick={() => setShowCard(false)}
			className={`absolute z-0 transition-all duration-500  ${
				showCard
					? 'w-[800px] h-[600px] z-20 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-secondary shadow-lg shadow-primary'
					: ' w-[300px] h-[380px] bg-transparent'
			}`}></div>
	);
};
