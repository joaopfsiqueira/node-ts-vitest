import { Order } from '../../entities/order/order'
import { OrderRepository } from '../orders-repository'

export class InMemoryOrderRepository implements OrderRepository {
    public items: Order[] = []

    async create(order: Order): Promise<void> {
        this.items.push(order)
    }
}
