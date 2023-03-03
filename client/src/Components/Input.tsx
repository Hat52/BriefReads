import { twMerge } from 'tailwind-merge';

interface IInput {
	placeholder: string;
	type?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export default function Input({ placeholder, type = 'text', onChange, className }: IInput) {
	const inputClass = twMerge('flex w-[348px] h-[48px] px-2 bg-secondary rounded-md', className);

	return (
		<div className={inputClass}>
			<input
				onChange={onChange}
				className="w-full h-full bg-transparent outline-none caret-typography text-typography"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
}
