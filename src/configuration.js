// @flow

export type Options = {
  eol: string
};

export const options: Options = {
  eol: '\n' // Using EOL from 'os' here would require node bulitins
};

export function configure(newOptions: Object) {
  Object.assign(options, newOptions);
}
