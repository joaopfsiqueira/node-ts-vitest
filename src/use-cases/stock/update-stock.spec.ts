import { describe, expect, it } from 'vitest'
import { UpdateStock } from './update-stock'

import { InMemoryStockRepository } from '../../repositories/in-memory/in-memory-stocks-repository'
import { MockStock } from '../../repositories/mocks/mocks'

describe('Update Product', () => {
    it('should be able to update an exist product', async () => {
        const stockRepository = new InMemoryStockRepository(MockStock)
        const updateStock = new UpdateStock(stockRepository)

        const stockToUpdate = await updateStock.execute({
            quantity: 20,
            product_id: 1,
        })

        expect(stockToUpdate).toEqual({ status: 200, message: 'Stock updated successfully' })
    })

    it('should NOT be able to update not exist product', async () => {
        const stockRepository = new InMemoryStockRepository(MockStock)
        const updateStock = new UpdateStock(stockRepository)
        //tente cadastrar com o mesmo produto que já existe no mock, crio uma função wrapper async que vai charmar o método execute que é async.
        const wrapper = async () => {
            await updateStock.execute({
                quantity: 20,
                product_id: 4,
            })
        }

        await expect(wrapper).rejects.toThrowError('Stock does not exists')
        //nesse caso, utilizei rejects por ser uma função async, e o await irá retornar uma Promise da função wrapper que chama o execute. Essa forma é melhor para validar retornos de uma função que não seja um objeto ou algo poupável na grande parte do tempo, nesse exemplo, um new Error.
    })
})
