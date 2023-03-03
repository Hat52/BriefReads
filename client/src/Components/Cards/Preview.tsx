import Cover from '../../assets/Images/cover.jpg';

export default function Preview() {
	return (
		<div className="bg-[#393E4660] w-[300px] gap-4 h-[400px] rounded-md flex flex-col p-5">
			<img
				src={Cover}
				alt="book cover"
				className="w-full h-1/2 object-fill rounded-sm opacity-50"
			/>
			<div className="flex flex-col gap-1">
				<CardItem title="Author" description="Hamza Ali" />
				<CardItem title="Published" description="may-2023" />
			</div>
			<div>
				<p className="truncate-3-lines text-sm text-typography">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
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
