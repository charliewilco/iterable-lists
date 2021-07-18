import { describe, it, jest, expect } from "@jest/globals";
import { Stack } from "../src";

describe("Queue", () => {
  it("contains size", () => {
    const s = new Stack<string>();
    s.add("1");
    s.add("2");

    expect(s.size).toEqual(2);
  });

  it("has previous", () => {
    const s = new Stack();
    s.add("1");
    s.add("2");

    expect(s.tail?.prev).not.toBeNull();
    expect(s.tail?.prev?.data).toEqual("1");
  });

  it("can iterate", () => {
    const collector = jest.fn();
    const s = new Stack<string>();
    s.add("1");
    s.add("2");

    for (const value of s) {
      collector(value);
    }

    expect(collector).toHaveBeenCalledTimes(2);
    expect(collector.mock.calls).toEqual([["1"], ["2"]]);
  });
});
