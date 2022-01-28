export type Product = {
	id_produto: number;
	str_id_integrador: string;
	str_nom_produto: string;
	mny_vlr_produto_de: number;
	mny_vlr_produto_por: number;
	bit_esgotado: boolean;

	// Product Image
	str_img_path: string;
	str_img_path_cdn: string;
};
