import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButton {
	children: ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

export default function Button({ children, onClick, className }: IButton) {
	const buttonClass = twMerge(
		'w-[100px] h-[48px] bg-outline rounded-md font-medium text-typography',
		className
	);
	return (
		<button onClick={onClick} className={buttonClass}>
			{children}
		</button>
	);
}
