export default function appendSpaces(str: string, targetSize: number): string {
	if (str.length > targetSize) return str;
	str += ' '.repeat(targetSize - str.length);

	return str;
}
