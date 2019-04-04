export interface Menu {
	id?: number;
	name: string;
	url: string;
	icon: string;
	module: string;
	isActive: boolean;
	parent: number;
}
