import { describe, it, xit, expect } from "@jest/globals";
import { Queue } from "../src";

describe("Queue", () => {
  it("contains size", () => {
    const q = new Queue<string>();
    q.add("1");
    q.add("2");

    expect(q.size).toEqual(2);
  });

  xit("does basic map operations", () => {});
});
