import { Product } from '../product/product'

export interface OrderProps {
    id: number
    products: Promise<Product>[]
    value: number
}

export class Order {
    constructor(public props: OrderProps) {}

    get id() {
        return this.props.id
    }

    get product() {
        return this.props.products
    }

    get value() {
        return this.props.value
    }
}
