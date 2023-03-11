import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { ISummaryCard } from '../../model';

const SummaryCard = ({ name, like, dislike, handleClick }: ISummaryCard) => {
	return (
		<div
			onClick={handleClick}
			className="w-full cursor-pointer px-2 py-1 shadow-sm bg-secondaryFaded shadow-outlineFaded h-max rounded-md hover:scale-105 transition-all duration-500">
			<h6 className="font-semibold text-typography">{name}</h6>
			<div className="flex text-outline justify-end gap-2 pointer-events-none">
				<div className="flex items-center gap-1">
					<span className="text-[10px]">{like}</span>
					<AiOutlineLike />
				</div>
				<div className="flex items-center gap-1">
					<span className="text-[10px]">{dislike}</span>
					<AiOutlineDislike />
				</div>
			</div>
		</div>
	);
};

export default SummaryCard;
