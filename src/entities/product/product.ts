export interface ProductsProps {
  id: number
  name: string
  price: number
  description: string
}

export class Product {
  constructor(public props: ProductsProps) {}

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get price() {
    return this.props.price
  }
  get description() {
    return this.props.description
  }
}

// coloquei get para "simular" o efeito de uma entendidade.
// se fosse typeorm, não precisaria fazer dessa forma uma vez que esses campos de props já estariam sendo utilizados em algum método para criar tabela.
