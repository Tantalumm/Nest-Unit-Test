# merge-arrays-ts

โจทย์: เขียนฟังก์ชัน

```ts
merge(collection_1: int[], collection_2: int[], collection_3: int[]): int[]
```

โดยคืนค่าเป็น **array ที่เรียงจากน้อยไปมาก (ascending)**

เงื่อนไข:
- `collection_1` เรียงจาก **มาก -> น้อย** (descending)
- `collection_2`, `collection_3` เรียงจาก **น้อย -> มาก** (ascending)
- **ห้ามใช้ฟังก์ชัน sort ใด ๆ** (เช่น `Array.sort()`)

## แนวคิด (Algorithm)

- `collection_2` และ `collection_3` เป็น ascending อยู่แล้ว จึงอ่านจากซ้ายไปขวาได้เลย
- `collection_1` เป็น descending ดังนั้นค่าที่เล็กที่สุดจะอยู่ "ท้ายสุด" ของ array  
  เราจึงอ่าน `collection_1` จากท้ายไปหน้า (index: `len-1` -> `0`) เพื่อให้ได้ลำดับ ascending

จากนั้นทำ **three-way merge**:
- มี pointer 3 ตัว: `i1` (เดินถอยหลัง), `i2`, `i3` (เดินไปข้างหน้า)
- ทุกครั้งเลือกค่าที่น้อยที่สุดใน 3 ตัว แล้วใส่ผลลัพธ์และขยับ pointer ของตัวที่ถูกเลือก
- ทำจนกว่าจะหมดทุก array

เวลา: `O(n1+n2+n3)`  
หน่วยความจำเพิ่ม: `O(n1+n2+n3)` (output)

## Project structure

- `src/merge.ts` – โค้ดฟังก์ชัน merge (ห้ามใช้ sort)
- `test/merge.test.ts` – unit tests (ใช้ Vitest)
- `src/index.ts` – ตัวอย่างการรัน

## Setup

ต้องมี Node.js 18+ (แนะนำ)

```bash
npm install
```

## Run unit tests

```bash
npm test
```

หรือ watch mode:

```bash
npm run test:watch
```

## Build & run example

```bash
npm run build
npm start
```
