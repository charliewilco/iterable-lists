import type { INode } from "./node";
import { BaseList, IListLike } from "./base";

interface IQueueList<T> extends IListLike<T> {
	peek(): T;
	add(value: T): boolean;
	remove(): T | null;
}

// First In First Out
export class Queue<T> extends BaseList<T> implements IQueueList<T>, Iterable<T> {
	constructor(initialPayload?: T) {
		super();
		if (initialPayload) {
			this.addFront(initialPayload);
		}
	}

	static fromEntries<T>(array: T[]): Queue<T> {
		const q = new Queue<T>();

		for (const value of array) {
			q.add(value);
		}

		return q;
	}

	peek(): T {
		if (this.head) {
			return this.head.data;
		}

		throw new Error("Tooooooo much");
	}

	add(value: T): boolean {
		return this.addFront(value);
	}

	remove(): T | null {
		return this.removeFront();
	}

	values(): T[] {
		const values = [];
		let current: INode<T> | null | undefined = this.head;
		while (current !== null) {
			if (current) {
				values.unshift(current.data);
				current = current.next;
			}
		}
		return values;
	}

	*[Symbol.iterator]() {
		for (const value of this.values()) {
			yield value;
		}
	}
}
