import strings from '../strings';
import { Product } from '../../types/consinco';

export default function createList(produtos: Product[]): string {
	let str = '```';

	str += '--------------------------------------\n';
	if (produtos.length > 0)
		for (const produto of produtos) {
			const name: string[] = strings.limitSize(produto.str_nom_produto);

			str += `|            --Produto--             |\n`;
			for (const part of name) str += `| ${part} |\n`;

			if (produto.bit_esgotado) str += `|          PRODUTO ESGOTADO          |\n`;
			else
				str += `|         Valor: R$ ${strings.limitSize(
					String(produto.mny_vlr_produto_por),
					17
				)}|\n`;
			if (produtos.indexOf(produto) != produtos.length - 1)
				str += '--------------------------------------\n';
			else str += '--------------------------------------';

			// Caso a busca não tenha nenhum resultado
		}
	else {
		str += '|           SEM RESULTADOS           |\n';
		str += '--------------------------------------';
	}

	str += '```';
	return str;
}
