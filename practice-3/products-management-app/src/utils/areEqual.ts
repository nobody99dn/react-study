import { isEqual } from 'lodash';

export const areEqual = <T>(
  prevProps: Readonly<T>,
  nextProps: Readonly<T>
): boolean => {
  return isEqual(prevProps, nextProps);
};
