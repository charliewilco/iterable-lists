import { INode } from "./node";
import { BaseList, IListLike } from "./base";

interface IStackList<T> extends IListLike<T> {
  peek(): T;
  add(value: T): boolean;
  remove(): T | null;
}

export class Stack<T> extends BaseList<T> implements IStackList<T>, Iterable<T> {
  constructor(initialPayload?: T) {
    super();
    if (initialPayload) {
      this.addBack(initialPayload);
    }
  }

  peek(): T {
    if (this.tail) {
      return this.tail.data;
    }

    throw new Error("Tooooooo much");
  }

  add(value: T) {
    return this.addBack(value);
  }

  remove() {
    return this.removeBack();
  }

  values(): T[] {
    const values = [];
    let current: INode<T> | null | undefined = this.tail;
    while (current !== null) {
      if (current) {
        values.unshift(current.data);
        current = current.prev;
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
