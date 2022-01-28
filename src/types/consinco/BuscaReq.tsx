export type BuscaReq = {
	descricao: string;

	// MV = Mais Vendidos, PD = Menor Preço, PU = Maior Preço,
	// MR = Mais Recentes, AZ = A-Z, ZA = Z-A
	order: 'MV' | 'PD' | 'PU' | 'MR' | 'AZ' | 'ZA';
	pg: number;
	marcas: [];
	categorias: [];
	subcategorias: [];
	precoIni: 0;
	precoFim: 0;
	avaliacoes: [];
	num_reg_pag: number;
	visualizacao: 'CARD' | 'LIST';
	q: string;
};
