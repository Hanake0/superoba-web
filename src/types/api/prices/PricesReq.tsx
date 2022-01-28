export type PricesReq = {
	force_refresh: boolean;

	search: string;
	order: '' | 'MV' | 'PD' | 'PU' | 'MR' | 'AZ' | 'ZA';
	page: string;
	items_per_page: 'images' | '' | '5' | '10';
};
