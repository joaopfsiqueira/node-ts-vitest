import { describe, expect, it } from 'vitest'
import { CreateOrder } from './create-order'
import { CreateProduct } from '../product/create-product'
import { Order } from '../../entities/order/order'
import { InMemoryOrderRepository } from '../../repositories/in-memory/in-memory-orders-repository'
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-products-repository'

describe('Create Order', () => {
    it('should be able to create a new order with 1 product', async () => {
        const orderRepository = new InMemoryOrderRepository()
        const productRepository = new InMemoryProductRepository()

        const createOrder = new CreateOrder(orderRepository)
        const createProduct = new CreateProduct(productRepository)

        const product1 = createProduct.execute({
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        })

        const products = [product1]

        expect(products.length).toBe(1)
        expect(createOrder.execute({ id: 1, products })).resolves.toBeInstanceOf(Order)
    })

    it('should be able to create a new order with 2 products', async () => {
        const orderRepository = new InMemoryOrderRepository()
        const productRepository = new InMemoryProductRepository()

        const createOrder = new CreateOrder(orderRepository)
        const createProduct = new CreateProduct(productRepository)

        const product1 = createProduct.execute({
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        })

        const product2 = createProduct.execute({
            id: 2,
            name: 'Celular',
            price: 2000,
            description: 'S23',
        })

        const products = [product1, product2]

        expect(products.length).toBe(2)
        expect(createOrder.execute({ id: 1, products })).resolves.toBeInstanceOf(Order)
    })

    it('not should be able to create a new order without product', async () => {
        const orderRepository = new InMemoryOrderRepository()

        const createOrder = new CreateOrder(orderRepository)

        const order = createOrder.execute({ id: 1, products: [] })

        expect(order).rejects.toBeInstanceOf(Error)
    })
})
