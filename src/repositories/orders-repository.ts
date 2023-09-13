import { OrderProps } from '../entities/order/order'

export interface OrderRepository {
    create(order: OrderProps): Promise<void>
    checkIfExist(order_id: number): Promise<boolean>
}
