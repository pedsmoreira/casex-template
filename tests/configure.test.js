import { replacePatterns, configure } from '../src';

describe('configure', () => {
  it('allows EOL configuration', () => {
    configure({ eol: ':::' });

    const textArray = ['one', 'two', 'three'];
    const transformedText = replacePatterns(textArray, null);

    expect(transformedText).toEqual('one:::two:::three');
  });
});
