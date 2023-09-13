import { test, expect } from 'vitest'

import { Stock } from './stock'

test('insert stock of a product', () => {
    const stock = new Stock({
        quantity: 10,
        product_id: 1,
    })

    expect(stock).instanceOf(Stock)
    expect(stock.stock.quantity).toBe(10)
})
