import { test, expect } from 'vitest'
import { Order } from './order'

test('should be create an order', () => {
    let valor = 0
    const products = [
        {
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        },
        {
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        },
        {
            id: 2,
            name: 'Celular',
            price: 2000,
            description: 'S23',
        },
    ]

    products.map((product) => {
        valor += product.price
        return valor
    })

    const order = new Order({
        id: 1,
        products,
        value: valor,
    })

    expect(order).toBeInstanceOf(Order)
})
