import type { NextApiRequest, NextApiResponse } from 'next';
import checkAuth from '../../../utils/api-auth';
import consinco from '../../../services/consinco';
import strings from '../../../utils/strings';
import { PricesReq, PricesRes, ProductPrices } from '../../../types/api/prices';

const validOrders = ['MV', 'PD', 'PU', 'MR', 'AZ', 'ZA'];
const validItemsPerPage = ['5', '10'];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<PricesRes>
) {
	if (checkAuth(req, res) == false) return;

	const pr: PricesReq = req.body as PricesReq;

	// Normaliza os dados
	const images = pr.items_per_page === 'images';
	if (pr.items_per_page === 'images') pr.items_per_page = '5';
	if (!validItemsPerPage.includes(pr.items_per_page)) pr.items_per_page = '10';
	if (!validOrders.includes(pr.order)) pr.order = 'MV';

	// Busca os produtos no site do Superoba
	const results = await consinco.search(
		pr.search,
		Number(pr.page),
		pr.items_per_page,
		pr.order
	);

	// Calcula o total de páginas
	const qtdRes = results.Avaliacoes[0].int_qtd_produto;
	const totalPages = Math.ceil(qtdRes / Number(pr.items_per_page));

	// Calcula a necessidade de botões de paginação
	const needsNP = totalPages > Number(pr.page);
	const needsPP = Number(pr.page) > 1;

	// Formata os preços
	const products: ProductPrices = {};

	// 5 imagens
	if (images)
		for (let i = 1; i <= 5; i++)
			if (results.Produtos[i - 1])
				products[`p${i}`] = {
					image: results.Produtos[i - 1].str_img_path_cdn,
					caption: strings.formatProduct(results.Produtos[i - 1]),
				};
			else products[`p${i}`] = { image: '', caption: '' };
	// x produtos em lista de texto
	else products.formatted_prices = strings.createList(results.Produtos);

	// Retorna os dados
	return res.status(200).json({
		success: true,

		total_pages: totalPages,
		needs_next_page_button: needsNP ? 1 : 0,
		needs_previous_page_button: needsPP ? 1 : 0,

		products: products,
	});
}
