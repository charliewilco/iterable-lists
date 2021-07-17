import { INode } from "./types";

export class ListNode<T> implements INode<T> {
  public data: T;
  public next: INode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}
