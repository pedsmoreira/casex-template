// @flow

const MATCHING_PATTERN = /(_?)_[nN][aA]([^a-zA-Z]*)[mM][eE]_([s_]?)/g;

export function matches(text: string) {
  return text.match(MATCHING_PATTERN) || [];
}

export function pruneMatch(match: string) {
  if (!match.startsWith('__') && match.endsWith('__')) return match.substring(0, match.length - 1);
  return match;
}
