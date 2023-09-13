import { OrderProps } from '../../entities/order/order'
import { OrderRepository } from '../orders-repository'

export class InMemoryOrderRepository implements OrderRepository {
    public items: OrderProps[] = []

    async create(order: OrderProps): Promise<void> {
        this.items.push(order)
    }

    async checkIfExist(order_id: number): Promise<boolean> {
        return this.items.some((objeto) => objeto.id === order_id)
    }

    async updateProduct(order: OrderProps): Promise<void> {
        const orderToUpdate = this.items.find((objeto) => objeto.id === order.id)

        if (orderToUpdate) {
            Object.assign(orderToUpdate, order) //pega tudo dos parametros e atualiza no producto atualizado, usando object.assign.
        } else {
            throw new Error(`Product not found`)
        }
    }
}
