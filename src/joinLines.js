// @flow

import { options } from './configuration';

export default function joinLines(text: string | string[]) {
  return Array.isArray(text) ? text.join(options.eol) : text;
}
