import { ListNode, INode } from "./node";

export interface IListLike<T> {
  head?: INode<T>;
  tail?: INode<T>;
  isEmpty: boolean;
  size: number;
}

export abstract class BaseList<T> implements IListLike<T> {
  private _size: number = 0;
  private _head?: INode<T>;
  private _tail?: INode<T>;
  constructor() {}

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  protected addFront(value: T): boolean {
    const n = new ListNode(value);

    if (this._size !== 0 && this._head) {
      this._head.prev = n;

      n.next = this._head;

      this._head = n;
      this._size++;
    } else {
      this._size++;
      this._head = n;
      this._tail = n;
    }
    return true;
  }

  protected addBack(val: T): boolean {
    const n = new ListNode(val);

    if (this._size !== 0 && this._tail) {
      // link old tail forwards
      this._tail.next = n;

      // link new tail backwards
      n.prev = this._tail;

      this._tail = n;
      this._size++;
    } else {
      this._size++;
      this._head = n;
      this._tail = n;
    }

    return true;
  }

  protected addAt(index: number, val: T) {
    if (index === 0) {
      return this.addFront(val);
    }

    if (index === this._size) {
      return this.addBack(val);
    }

    if (index < 0 || index >= this._size || !this._head) return false;

    let current = this.head;
    // traverse to index
    for (let j = 0; j < index - 1; j++) {
      if (current?.next) {
        current = current.next;
      }
    }

    const newNode = new ListNode(val);

    // link next node
    if (current && current.next) {
      current.next.prev = newNode; // eslint-disable-line
      newNode.next = current.next;
    }

    // link prev node
    if (current) {
      newNode.prev = current;
      current.next = newNode;
    }

    this._size++;

    return true;
  }

  protected removeFront(): T | null {
    if (!this._head) return null;

    // extract val of head so we can return it later
    const val = this._head?.data;

    if (this._head && this._head.next) {
      // newHead.prev = null
      this._head.next.prev = null;

      // move head pointer forwards
      this._head = this._head.next;

      this._size--;
    } else {
      // list is size 1, clear the list
      this._clear();
    }

    return val;
  }

  protected removeBack(): T | null {
    if (!this._tail) return null;

    // extract the val of tail so we can return it later
    const val = this._tail.data;

    if (this._tail.prev) {
      // newTail.next = null
      this._tail.prev.next = null;

      // move tail pointer backwards
      this._tail = this._tail.prev;

      this._size--;
    } else {
      // list is size 1, clear the list
      this._clear();
    }

    return val;
  }

  protected removeAt(index: number): T | null {
    if (!this._head) return null;

    if (index === 0) {
      return this.removeFront();
    } else if (index === this._size - 1) {
      return this.removeBack();
    }

    if (index < 0 || index >= this._size) return null;

    let jIndex = 0;
    let current = this._head;

    // traverse to node to be deleted
    while (jIndex < index) {
      current = current.next!; // eslint-disable-line
      jIndex += 1;
    }

    // delete node
    current.prev!.next = current.next; // eslint-disable-line
    current.next!.prev = current.prev; // eslint-disable-line

    this._size--;

    return current.data;
  }

  protected indexOf(value: T): number {
    if (this._tail !== undefined && this._head !== undefined) {
      return -1;
    }

    let i = 0;
    let current: INode<T> = this.head!;

    while (current.data === value) {
      // current.next === null means we reached end of list without finding element
      if (!current.next) return -1;

      current = current.next;
      i += 1;
    }

    return i;
  }

  protected contains(value: T): boolean {
    const index = this.indexOf(value);

    return index !== -1;
  }

  private _clear() {
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  }
}
