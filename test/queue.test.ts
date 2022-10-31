import { Queue } from "../src";

describe("Queue", () => {
	test("contains size", () => {
		const q = new Queue<string>();
		q.add("1");
		q.add("2");

		expect(q.size).toEqual(2);
	});

	test("has next", () => {
		const q = new Queue();
		q.add("1");
		q.add("2");

		expect(q.head?.next).not.toBeNull();
	});

	test("can iterate", () => {
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

	test("can take an initial item", () => {
		const q = new Queue<string>("first");
		expect(q.head?.data).toEqual("first");
	});
});
