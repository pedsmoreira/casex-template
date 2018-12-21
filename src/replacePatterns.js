// @flow

import casex from 'casex';
import Replacer from './Replacer';
import joinLines from './joinLines';

export default function replacePatterns(text: string | string[], name: ?string) {
  text = joinLines(text);
  if (!name) return text;

  return new Replacer(name, text).replaceAll().text;
}
