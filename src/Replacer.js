// @flow

import casex from 'casex';
import Pluralizer from './Pluralizer';
import { pruneMatch, matches } from './matching';

export default class Replacer {
  name: string;
  text: string;

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
  }

  replaceAll() {
    let pos = 0;

    matches(this.text).forEach(match => {
      const index = this.text.indexOf(match, pos);
      pos = this.replace(pruneMatch(match), index);
    });

    return this;
  }

  replace(match: string, index: number) {
    const replacement = this.pluralize(match);

    const before = this.text.substring(0, index);
    const after = this.text.substring(index + match.length);

    this.text = before + replacement + after;
    return index + replacement.length + 1;
  }

  pluralize(match: string) {
    const pluralizer = new Pluralizer(match);
    return casex(pluralizer.pluralize(this.name), pluralizer.casexPattern);
  }
}
