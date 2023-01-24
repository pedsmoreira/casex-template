const PATTERN = /(_?)_[nN][aA]([^a-zA-Z]*)[mM][eE]_([s_]?)/g;

interface MatchCasexTemplatePatternsInTextArgs {
	text: string;
}

export function matchCasexTemplatePatternsInText({
	text,
}: MatchCasexTemplatePatternsInTextArgs) {
	const matches = text.match(PATTERN);
	if (!matches) return [];

	return matches.map((match) => {
		const startsWithStatic = match.startsWith("__");
		const endsWithStatic = match.endsWith("__");
		const isStatic = startsWithStatic && endsWithStatic;

		if (startsWithStatic && !isStatic) {
			return match.substring(1, match.length);
		}

		if (endsWithStatic && !isStatic) {
			return match.substring(0, match.length - 1);
		}

		return match;
	});
}
