// @flow

import { EOL } from 'os';

export type Options = {
  eol: string
};

export const options: Options = {
  eol: EOL
};

export function configure(newOptions: Object) {
  Object.assign(options, newOptions);
}
