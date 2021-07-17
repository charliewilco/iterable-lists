import { ListNode } from "./node";
import { IListLike } from "./types";

export class Queue<T> implements IListLike<T> {
  public head: ListNode<T> | null = null;
  public tail: ListNode<T> | null = null;
  private _length: number = 0;

  constructor(initialPayload?: T) {
    if (initialPayload) this.head = new ListNode(initialPayload);
  }

  public get isEmpty(): boolean {
    return this.head === null;
  }

  public get size(): number {
    return this._length;
  }

  public peek(): T {
    if (this.head !== null) {
      return this.head.data;
    }

    throw new Error("Tooooooo much");
  }

  public add(value: T): void {
    if (this.isEmpty) {
      this.head = new ListNode(value);
    }

    if (this.tail !== null) {
      this.tail.next = new ListNode(value);
    }
    this.tail = new ListNode(value);
    this._length++;
  }

  public remove(): T {
    if (this.head === null) {
      this.tail = null;
      throw new Error("Nothing to remove");
    }
    const { data, next } = this.head;

    this.head = next;
    this._length--;

    return data;
  }

  *[Symbol.iterator]() {
    while (this._length) {
      if (this.tail) {
        yield this.tail.data;
      }
    }
  }
}
