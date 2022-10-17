import { SubStrPipe } from './sub-str.pipe';

describe('TrimPipe', () => {
  let pipe = new SubStrPipe();

  beforeEach(() => {
    pipe = new SubStrPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return trimmed version of the string ending with ellipsis', () => {
    expect(
      pipe.transform('not only five centuries, but also the lea', 3)
    ).toEqual('not...');
  });

  it('should return not trimmed version of the string', () => {
    const expectedValue = 'not only five centuries, but also the lea';

    expect(pipe.transform(expectedValue)).toEqual(expectedValue);
  });
});
