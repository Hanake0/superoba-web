import { BuscaReq, BuscaRes } from '../../types/consinco';
import consinco from './index';

export async function search(
	query: string,
	page: number = 1,
	res_number: string = '4',
	order: string = 'MV'
): Promise<BuscaRes> {
	const request: BuscaReq = {
		descricao: query,
		q: query,
		pg: page,
		num_reg_pag: Number(res_number),

		// @ts-ignore
		order: order,

		// Desnecessário
		visualizacao: 'LIST',
		marcas: [],
		categorias: [],
		subcategorias: [],
		avaliacoes: [],

		precoIni: 0,
		precoFim: 0,
	};

	const results = await consinco.api.post('/busca', request);
	let response: BuscaRes;

	if (results.status == 200) response = results.data as BuscaRes;
	else {
		console.log(
			`[Consinco] Erro ao buscar produtos: ${results.status}: ${results.statusText}`,
			results.data
		);

		response = {
			Produtos: [],
			Banners: [],
			Categorias: [],
			Precos: [],
			Avaliacoes: [],
			Promocoes: [],
			Created_at: Date.UTC(1970, 0),
		};
	}

	response.Created_at = Date.now();
	return response;
}
