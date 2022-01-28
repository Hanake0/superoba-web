import strings from '../strings';

export default function limitSize(str: string, lSize: number = 34): string[] {
	let res = [];

	// Se couber em uma linha
	if (str.length <= lSize) {
		res.push(strings.appendSpaces(str, lSize));

		// Se precisar de mais de uma linha
	} else if (str.length > lSize) {
		res = strings.separeWords(str, lSize);
	}

	return res;
}
