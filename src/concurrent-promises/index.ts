const evaluateListByCount = async <T>(
    list: T[],
    evaluate: (idx: number) => Promise<void>,
    maxCount: number
  ) => {
  const result = Array.from(
    { length: Math.min(list.length, maxCount) },
    (item, idx) => evaluate(idx)
  );

  return Promise.all(result);
};

async function concurrentPromises<T, P> (
  list: T[],
  evaluate: (item: T) => Promise<P>,
  maxCount = 1
): Promise<P[]> {
  const listLength = list.length;
  let result = new Array<P>(listLength);
  let lastPendingIdx = 0;

  const promise = (idx: number): Promise<void> => (
    evaluate(list[idx]).then(item => {
      result[idx] = item;

      if (lastPendingIdx < listLength - 1) {
        ++lastPendingIdx;
        return promise(lastPendingIdx);
      }
    })
  );

  await evaluateListByCount(list, promise, maxCount);

  return result;
}

export { concurrentPromises };