<h1 align="center">ES Module Defaults for TypeScript Libs</h1>

Uses prettier, rollup, esbuild and vite for the example.

## Install

```sh
yarn add @charliewilco/iterable-lists
```

## Usage

```ts
import { Queue } from "@charliewilco/iterable-lists";

const q = new Queue();

q.add("1");
q.add("2");

q.head; // "2"

for (const value of q) {
  console.log(value);
}

// "1"
// "2"
```
