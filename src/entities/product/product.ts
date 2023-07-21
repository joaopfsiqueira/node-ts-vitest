export interface IProduct {
  name: string;
  price: number;
  description: string;
}

export class Product {
  constructor(public props: IProduct) {}
}
