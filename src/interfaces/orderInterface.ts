export interface Products {
  products: Array<number>,
}

export interface Order extends Products {
  id: number,
  userId: number,
}