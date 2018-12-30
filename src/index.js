// @flow

import casex from 'casex';
import Replacer from './Replacer';

export default function battleCasex(text: string, name: ?string) {
  if (!name) return text;
  return new Replacer(name, text).replaceAll().text;
}
