import strings from '../strings';

export default function separeWords(str: string, desiredSize: number): string[] {
	let res = [];

	let size = desiredSize;
	do {
		if (str.charAt(size) == ' ' || (str.charAt(size) == '' && str.length > 0)) {
			res.push(strings.appendSpaces(str.slice(0, size), desiredSize));
			str = str.slice(size).trim();

			size = desiredSize;
		} else
			do {
				size--;
			} while (str.charAt(size) != ' ' && size > 0);
	} while (str.length > 0);

	return res;
}
