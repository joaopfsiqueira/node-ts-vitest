import { describe, expect, it } from 'vitest'
import { CreateProduct } from './create-product'
import { Product } from '../../entities/product/product'
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-products-repository'

describe('Create Product', () => {
    it('should be able to create an product', () => {
        const productRepository = new InMemoryProductRepository()
        const createProduct = new CreateProduct(productRepository)

        expect(
            createProduct.execute({
                id: 1,
                name: 'Notebook',
                price: 1000,
                description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
            }),
        ).resolves.toBeInstanceOf(Product)
    })

    it('should not be able to create a product with the same id or already exist', async () => {
        const productRepository = new InMemoryProductRepository()
        const createProduct = new CreateProduct(productRepository)

        //cadastro o primeiro produto com id 1
        await createProduct.execute({
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        })

        //tente cadastrar com o mesmo produto
        expect(
            createProduct.execute({
                id: 1,
                name: 'Notebook',
                price: 1000,
                description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
            }),
        ).rejects.toBeInstanceOf(Error)
    })
})
