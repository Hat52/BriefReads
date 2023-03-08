import Cover from '../../assets/Images/cover.jpg';
import { IPreview } from '../../model';

export default function Preview({ name, author, publishedDate, description }: IPreview) {
	return (
		<div className="relative">
			<div className="bg-[#393E4660] w-[300px] z-10 gap-4 h-[380px] rounded-md flex flex-col p-2 hover:scale-105 cursor-default transition-scale duration-500">
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
