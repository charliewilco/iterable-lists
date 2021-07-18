export interface INode<T> {
  data: T;
  prev: INode<T> | null;
  next: INode<T> | null;
}

export class ListNode<T> implements INode<T> {
  public data: T;
  public prev: INode<T> | null = null;
  public next: INode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}
