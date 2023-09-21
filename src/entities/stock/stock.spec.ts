import { test, expect } from 'vitest'

import { Stock } from './stock'

test('insert stock of a product', () => {
    const stockData = {
        quantity: 10,
        product_id: 123,
    }

    // Crie uma instância da classe Stock
    const stock = new Stock(stockData)

    // Use expect para verificar os getters
    expect(stock.quantity).toBe(10) // Verifica se o getter de quantity retorna o valor esperado
    expect(stock.product_id).toBe(123) // Verifica se o getter de product_id retorna o valor esperado
})
