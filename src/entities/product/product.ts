export interface IProcuct {
  name: string;
  price: number;
  description: string;
}

export class Product {
  constructor(public props: IProcuct) {}
}
