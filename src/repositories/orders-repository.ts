import { Order } from '../entities/order/order'

export interface OrderRepository {
    create(order: Order): Promise<void>
}
