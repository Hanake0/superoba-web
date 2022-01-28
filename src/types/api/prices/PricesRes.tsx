import { ProductPrices } from './ProductPrices';

export type PricesRes = {
	success: boolean;

	total_pages: number;
	needs_next_page_button: 0 | 1;
	needs_previous_page_button: 0 | 1;

	products: ProductPrices;
};
