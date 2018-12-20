import namedCasex, { configure } from 'named-casex';

describe('configure', () => {
  it('allows EOL configuration', () => {
    configure({ eol: ':::' });

    const textArray = ['one', 'two', 'three'];
    const transformedText = namedCasex(textArray, null);

    expect(transformedText).toEqual('one:::two:::three');
  });
});
