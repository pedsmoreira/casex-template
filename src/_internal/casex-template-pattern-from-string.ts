import { CasexTemplatePattern } from "../types";

export function casexTemplatePatternFromString(
	pattern: string,
): CasexTemplatePattern {
	const isStatic = pattern.startsWith("__");
	const isPlural = pattern.endsWith("s");

	const type = isStatic ? "static" : isPlural ? "plural" : "singular";
	const numberOfUnderscores = isStatic ? 2 : 1;

	const casexPattern = pattern.substring(
		numberOfUnderscores,
		pattern.length - numberOfUnderscores - (isPlural ? 1 : 0),
	);

	return { type, casexPattern };
}
