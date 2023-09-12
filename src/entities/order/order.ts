import { ProductsProps } from '../product/product'

export interface OrderProps {
    products: ProductsProps[]
    value: number
}

export class Order {
    constructor(public props: OrderProps) {}

    get product() {
        return this.props.products
    }

    get value() {
        return this.props.value
    }
}
