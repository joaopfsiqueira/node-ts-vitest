import { describe, expect, it } from 'vitest'
import { CreateStock } from './create-stock'
import { Stock } from '../../entities/stock/stock'
import { InMemoryStockRepository } from '../../repositories/in-memory/in-memory-stocks-repository'
import { MockStock } from '../../repositories/mocks/mocks'

describe('Create Stock', () => {
    it('should be able to create a new Stock', async () => {
        const stockRepository = new InMemoryStockRepository(MockStock)

        const createStock = new CreateStock(stockRepository)

        expect(
            await createStock.execute({
                quantity: 10,
                product_id: 2,
            }),
        ).toBeInstanceOf(Stock)
    })
    it('should NOT be able to create a new Stock because already exists', async () => {
        const stockRepository = new InMemoryStockRepository(MockStock)

        const createStock = new CreateStock(stockRepository)

        expect(
            await createStock.execute({
                quantity: 10,
                product_id: 1,
            }),
        ).toEqual({
            status: 403,
            message:
                'Product in stock already exists! Try again with a different product_id or try update the stock!',
        })
    })
})
