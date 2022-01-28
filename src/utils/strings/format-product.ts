import strings from '../strings';
import { Product } from '../../types/consinco';

export default function formatProduct(produto: Product): string {
	let str = '```';

	//str += '--------------------------------------\n';
	const name: string[] = strings.limitSize(produto.str_nom_produto);

	str += `|              --Nome--              |\n`;
	for (const part of name) str += `| ${part} |\n`;

	if (produto.bit_esgotado) str += `|          PRODUTO ESGOTADO\n`;
	else str += `|         Valor: R$ ${produto.mny_vlr_produto_por}\n`;
	//str += '--------------------------------------';

	str += '```';
	return str;
}
