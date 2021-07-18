import { describe, it, jest, expect } from "@jest/globals";
import { Queue } from "../src";

describe("Queue", () => {
  it("contains size", () => {
    const q = new Queue<string>();
    q.add("1");
    q.add("2");

    expect(q.size).toEqual(2);
  });

  it("has next", () => {
    const q = new Queue();
    q.add("1");
    q.add("2");

    expect(q.head?.next).not.toBeNull();
  });

  it("can iterate", () => {
    const collector = jest.fn();
    const q = new Queue<string>();
    q.add("1");
    q.add("2");

    for (const value of q) {
      collector(value);
    }

    expect(collector).toHaveBeenCalledTimes(2);
    expect(collector.mock.calls).toEqual([["1"], ["2"]]);
  });
});
