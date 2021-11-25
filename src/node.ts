export interface INode<T> {
  data: T;
  prev: INode<T> | null;
  next: INode<T> | null;
}

export class ListNode<T> implements INode<T> {
  data: T;
  prev: INode<T> | null = null;
  next: INode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}
