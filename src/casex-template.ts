import { casexTemplatePatternFromString } from "./_internal/casex-template-pattern-from-string";
import { applyCasexTemplatePatternToText } from "./_internal/apply-casex-template-pattern-to-text";
import { matchCasexTemplatePatternsInText } from "./_internal/match-casex-template-patterns-in-text";

interface CasexTemplateArgs {
	name: string;
	text: string;
}

export function casexTemplate({ name, text }: CasexTemplateArgs): string {
	let transformedText = text;

	const replace = (patternString: string, index: number) => {
		const pattern = casexTemplatePatternFromString(patternString);
		const replacement = applyCasexTemplatePatternToText({
			text: name,
			pattern,
		});

		const before = transformedText.substring(0, index);
		const after = transformedText.substring(index + patternString.length);

		transformedText = before + replacement + after;
		return index + replacement.length + 1;
	};

	let pos = 0;
	matchCasexTemplatePatternsInText({ text: transformedText }).forEach(
		(pattern) => {
			const index = transformedText.indexOf(pattern, pos);
			pos = replace(pattern, index);
		},
	);

	return transformedText;
}
