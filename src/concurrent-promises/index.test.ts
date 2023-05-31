import { concurrentPromises } from '.';

describe('concurrentPromises()', () => {
  describe('limitation of operations', () => {
    const list = [1, 2, 3, 4];

    function Counter(maxCount: number) {
      let counter = 0;

      return async function Counter(): Promise<void> {
        counter++;

        expect(counter).toBeLessThanOrEqual(maxCount);

        await new Promise(resolve => setTimeout(resolve, 1000));

        counter--;
      }
    };

    test('runs N or less promises at a time when count is N', () => {
      concurrentPromises(list, Counter(2), 2);
    });

    test('runs all or less promises at a time when count is bigger than list length', () => {
      concurrentPromises(list, Counter(10), 10);
    });

    test('runs one promise at a time when no count', () => {
      concurrentPromises(list, Counter(1));
    });
  });

  describe('async evaluation results', () => {
    test('multiplies list of values', async () => {
      const list = [1, 2, 3, 4, 5, 6];
      const evaluate = async (value: number): Promise<number> => value * 2;

      const result = await concurrentPromises(list, evaluate, 2);
      const expectedResult = [2, 4, 6, 8, 10, 12];

      expect(result).toEqual(expectedResult);
    });

    test('checks whether strings have blank spaces', async () => {
      const list = ['ABC', ' AB ', '    A'];
      const evaluate = async (value: string): Promise<boolean> => (
        value.trim().length === value.length
      );
      const result = await concurrentPromises(list, evaluate, 3);
      const expectedResult = [true, false, false];

      expect(result).toEqual(expectedResult);
    });
  })
});