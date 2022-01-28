import type { Product } from './Product';
import { Evaluation } from './Evaluation';

export type BuscaRes = {
	Produtos: Product[];
	Banners: unknown;
	Categorias: unknown;
	Precos: unknown;
	Avaliacoes: Evaluation[];
	Promocoes: unknown;

	Created_at: number;
};
