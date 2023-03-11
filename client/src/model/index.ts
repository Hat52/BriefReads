export interface IPreview {
	name: string;
	author: string;
	publishedDate: string;
	description: string;
	variant?: 'left' | 'center' | 'right';
}

export interface ISummaryCard {
	name: string;
	like: number;
	dislike: number;
}
