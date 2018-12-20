// @flow

import casex from 'casex';
import { configure, options } from './configuration';
import Replacer from './Replacer';

export function joinLines(text: string | string[]) {
  return Array.isArray(text) ? text.join(options.eol) : text;
}

export default function namedCasex(text: string | string[], name: ?string) {
  text = joinLines(text);
  if (!name) return text;

  return new Replacer(name, text).replaceAll().text;
}
