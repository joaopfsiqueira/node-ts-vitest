import { describe, expect, it } from 'vitest'
import { CreateProduct } from './create-product'
import { Product } from '../../entities/product/product'
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { MockProduct } from '../../repositories/mocks/mocks'

describe('Create Product', () => {
    it('should be able to create an product', () => {
        const productRepository = new InMemoryProductRepository(MockProduct)
        const createProduct = new CreateProduct(productRepository)

        expect(
            createProduct.execute({
                id: 2,
                name: 'Notebook',
                price: 1000,
                description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
            }),
        ).resolves.toBeInstanceOf(Product)
    })

    it('should not be able to create a product with the same id or already exist', async () => {
        const productRepository = new InMemoryProductRepository(MockProduct)
        const createProduct = new CreateProduct(productRepository)

        //tente cadastrar com o mesmo produto que já existe no mock, crio uma função wrapper async que vai charmar o método execute que é async.
        const wrapper = async () => {
            await createProduct.execute({
                id: 1,
                name: 'Notebook',
                price: 1000,
                description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
            })
        }

        //nesse caso, utilizei rejects por ser uma função async, e o await irá retornar uma Promise da função wrapper que chama o execute. Essa forma é melhor para validar retornos de uma função que não seja um objeto ou algo poupável na grande parte do tempo, nesse exemplo, um new Error.
        await expect(wrapper).rejects.toThrowError('Product already exists')
    })
})
