import pluralize from "pluralize";
import { casex } from "@dxtr.dev/casex";

import { CasexTemplatePattern } from "../types";

interface ApplyCasexTemplatePatternToTextArgs {
	text: string;
	pattern: CasexTemplatePattern;
}

export function applyCasexTemplatePatternToText({
	text,
	pattern,
}: ApplyCasexTemplatePatternToTextArgs): string {
	const casexFormattedText = casex({ text, pattern: pattern.casexPattern });

	switch (pattern.type) {
		case "static":
			return casexFormattedText;
		case "plural":
			return pluralize.plural(casexFormattedText);
		case "singular":
			return pluralize.singular(casexFormattedText);
	}
}
