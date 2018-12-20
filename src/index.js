// @flow

import casex from 'casex';
import pluralize from 'pluralize';
import { EOL } from 'os';

const options = {
  eol: EOL
};

export function configure(newOptions: Object) {
  Object.assign(options, newOptions);
}

export function resolveMatch(match: string) {
  if (match.endsWith('S')) match = match.substring(0, match.length - 1);

  const endsWithS = match.endsWith('s');
  const singularMatch = endsWithS ? match.substring(0, match.length - 1) : match;

  const doubleStart = singularMatch.startsWith('__');
  const doubleEnd = singularMatch.endsWith('__');

  if (doubleStart && doubleEnd) return singularMatch;
  if (doubleStart && !doubleEnd) return singularMatch.substring(1) + (endsWithS ? 's' : '');
  if (doubleEnd && !doubleStart) return singularMatch.substring(0, singularMatch.length - 1);
  return match;
}

export function applyPluralization(name: string, match: string) {
  if (match.startsWith('__')) return name;

  const isPlural = match.endsWith('s');
  return isPlural ? pluralize.plural(name) : pluralize.singular(name);
}

export function extractPluralizedPattern(match: string) {
  if (match.startsWith('__')) return match.substring(2, match.length - 2);

  const hasModifier = !match.endsWith('_');
  return match.substring(1, match.length - (hasModifier ? 2 : 1));
}

export default function namedCasex(text: string | string[], name: ?string) {
  if (Array.isArray(text)) text = text.join(options.eol);
  if (!name) return text;

  let newStr: string = text;

  const matches = text.match(/(_?)_na([^a-zA-Z]*)me_(_?)(s?)/gi) || [];
  let pos = 0;

  matches.forEach(match => {
    match = resolveMatch(match);

    // $FlowFixMe
    const casexedName = casex(applyPluralization(name, match), extractPluralizedPattern(match));

    const index = newStr.indexOf(match, pos);
    newStr = newStr.substring(0, index) + casexedName + newStr.substring(index + match.length);
    pos = index + casexedName.length + 1;
  });

  return newStr;
}
