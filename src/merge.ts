export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const n1 = collection_1.length;
  const n2 = collection_2.length;
  const n3 = collection_3.length;

  let i1 = n1 - 1;
  let i2 = 0;
  let i3 = 0;

  const result: number[] = [];
  result.length = n1 + n2 + n3;
  let i = 0;
  type Pick = 'c1' | 'c2' | 'c3';
  

  while (i1 >= 0 || i2 < n2 || i3 < n3) {
    let minVal = Infinity;
    let pick: Pick | null = null;
    
    if (i1 >= 0) {
      const v1 = collection_1[i1];
      if (v1 < minVal) {
        minVal = v1;
        pick = 'c1';
      }
    }
    if (i2 < n2) {
      const v2 = collection_2[i2];
      if (v2 < minVal) {
        minVal = v2;
        pick = 'c2';
      }
    }
    if (i3 < n3) {
      const v3 = collection_3[i3];
      if (v3 < minVal) {
        minVal = v3;
        pick = 'c3';
      }
    }

    result[i++] = minVal;

    if (pick === 'c1') i1--;
    else if (pick === 'c2') i2++;
    else i3++;
  }

  return result;
}
