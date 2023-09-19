import { OrderRepository } from '../../repositories/orders-repository'
import { Order } from '../../entities/order/order'
import { ProductsProps } from '../../entities/product/product'

interface ICreateOrderRequest {
    id: number
    products: ProductsProps[]
}

type CreateOrderResponse = Order

export class CreateOrder {
    constructor(private orderRepository: OrderRepository) {}

    async execute({ id, products }: ICreateOrderRequest): Promise<CreateOrderResponse> {
        let value = 0
        products.map((product) => {
            value += product.price
        })

        const order = new Order({ id, products, value })

        await this.orderRepository.create(order)

        return order
    }
}
