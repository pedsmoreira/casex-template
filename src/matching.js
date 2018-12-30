// @flow

const MATCHING_PATTERN = /(_?)_[nN][aA]([^a-zA-Z]*)[mM][eE]_([s_]?)/g;

export function matches(text: string, pattern: string | RegExp = MATCHING_PATTERN) {
  return text.match(pattern) || [];
}

export function pruneMatch(match: string) {
  if (!match.startsWith('__') && match.endsWith('__')) return match.substring(0, match.length - 1);
  return match;
}
