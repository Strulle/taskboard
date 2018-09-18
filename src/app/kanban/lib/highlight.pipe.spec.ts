import { Highlight } from './highlight.pipe';

describe('Highlight Pipe', () => {
  let pipe: Highlight;

  beforeEach(() => (pipe = new Highlight()));

  it('should find a matching text', () => {
    const highlight = pipe.transform('Buy', 'Buy');

    expect(highlight).toBe('<mark>Buy</mark>');
  });

  it('should only highlight the found text', () => {
    const highlight = pipe.transform('Buy Milk', 'Buy');

    expect(highlight).toBe('<mark>Buy</mark> Milk');
  });

  it('should be case insensitive', () => {
    const highlight = pipe.transform('buy Milk', 'Buy');

    expect(highlight).toBe('<mark>buy</mark> Milk');
  });

  it('should pass through if value is not given', () => {
    const highlight = pipe.transform(null, 'Buy');

    expect(highlight).toBeNull();
  });

  it('should pass through if query is not given', () => {
    const highlight = pipe.transform('Buy milk', null);

    expect(highlight).toBe('Buy milk');
  });
});
