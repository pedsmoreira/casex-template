// @flow

import pluralize from 'pluralize';

const STATIC_PATTERN = '__';
const MORPHING_PATTERN = '_';

const PLURAL_PATTERN = 's';

export default class Pluralizer {
  match: string;

  constructor(match: string) {
    this.match = match;
  }

  get static() {
    return this.match.startsWith(STATIC_PATTERN) && this.match.endsWith(STATIC_PATTERN);
  }

  get plural() {
    return this.match.endsWith(PLURAL_PATTERN);
  }

  get startingPattern() {
    return this.static ? STATIC_PATTERN : MORPHING_PATTERN;
  }

  get endingPattern() {
    return this.static ? STATIC_PATTERN : `${MORPHING_PATTERN}${this.plural ? PLURAL_PATTERN : ''}`;
  }

  get casexPattern() {
    return this.match.substring(this.startingPattern.length, this.match.length - this.endingPattern.length);
  }

  pluralize(name: string) {
    if (this.static) return name;
    return this.plural ? pluralize.plural(name) : pluralize.singular(name);
  }
}
