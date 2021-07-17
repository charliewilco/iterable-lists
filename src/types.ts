export interface INode<T> {
  data: T;
  next: INode<T> | null;
}

export interface IListLike<T> extends Iterable<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  isEmpty: boolean;
  size: number;
  peek(): T;
  add(value: T): void;
  remove(): T;
}
