import { describe, it, expect } from 'vitest';
import { merge } from '../src/merge';

describe('merge()', () => {
  it('test 01 normal', () => {
    const a = [9, 7, 5, 4];
    const b = [1, 2, 6, 8];
    const c = [3, 10, 11, 12];
    const reference = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(merge(a, b, c)).toEqual(reference);
  });

  it('test 02 normal with sort function', () => {
    const a = [10, 8, 7, 1, -1];
    const b = [-3, -1, 0, 7, 20];
    const c = [-10, 2, 2, 9];

    const merged = merge(a, b, c);

    const reference = [...a, ...b, ...c].sort((x, y) => x - y);
    expect(merged).toEqual(reference);
  });

  it('test 03 duplicates', () => {
    const a = [5, 3, 3, -2];
    const b = [-5, -2, 0, 3];
    const c = [-2, 3, 3, 100];
    const reference = [...a, ...b, ...c].sort((x, y) => x - y);
    expect(merge(a, b, c)).toEqual(reference);
  });

  it('test 04 empty', () => {
    expect(merge([], [0, 1], [2, 3])).toEqual([0, 1, 2, 3]);
    expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [])).toEqual([]);
  });

  it('test 05 single element', () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    expect(merge([5], [], [2])).toEqual([2, 5]);
    expect(merge([], [0], [])).toEqual([0]);
  });

    it('test 06 bug', () => {
    const a = [1, 8, 7, 1, -1];
    const b = [-3, -1, 0, 7, 20];
    const c = [-10, 2, 2, 9];

    const merged = merge(a, b, c);

    const reference = [...a, ...b, ...c].sort((x, y) => x - y);
    expect(merged).not.toEqual(reference);
  });

});
