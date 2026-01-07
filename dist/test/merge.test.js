import { describe, it, expect } from 'vitest';
import { merge } from '../src/merge';
describe('merge()', () => {
    it('merges 3 arrays into a single ascending array', () => {
        const a = [9, 7, 5, 3, 1];
        const b = [0, 2, 4, 6, 8];
        const c = [0, 1, 10, 11, 12];
        expect(merge(a, b, c)).toEqual([0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
    it('handles duplicates and negative numbers', () => {
        const a = [5, 3, 3, -2]; // descending (max -> min)
        const b = [-5, -2, 0, 3];
        const c = [-2, 3, 3, 100];
        expect(merge(a, b, c)).toEqual([-5, -2, -2, -2, 0, 3, 3, 3, 3, 5, 100]);
    });
    it('works when some arrays are empty', () => {
        expect(merge([], [0, 1], [2, 3])).toEqual([0, 1, 2, 3]);
        expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [], [])).toEqual([]);
    });
    it('does not mutate inputs', () => {
        const a = [5, 4, 1];
        const b = [0, 2];
        const c = [3];
        const aCopy = [...a];
        const bCopy = [...b];
        const cCopy = [...c];
        merge(a, b, c);
        expect(a).toEqual(aCopy);
        expect(b).toEqual(bCopy);
        expect(c).toEqual(cCopy);
    });
    it('property-style check vs reference sort (sort used ONLY in test)', () => {
        // Random-ish fixed data for repeatability
        const a = [10, 8, 7, 1, -1]; // descending
        const b = [-3, -1, 0, 7, 20]; // ascending
        const c = [-10, 2, 2, 9]; // ascending
        const merged = merge(a, b, c);
        const reference = [...a, ...b, ...c].sort((x, y) => x - y);
        expect(merged).toEqual(reference);
    });
});
