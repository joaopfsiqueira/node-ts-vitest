import { ProductsProps } from '../../entities/product/product'
import { ProductRepository } from '../products-repository'

export class InMemoryProductRepository implements ProductRepository {
    public items: ProductsProps[] = []

    async create(product: ProductsProps): Promise<void> {
        this.items.push(product)
    }

    async checkIfExist(product_id: number): Promise<boolean> {
        return this.items.some((objeto) => objeto.id === product_id)
    }

    async updateProduct(product: ProductsProps): Promise<void> {
        const productToUpdate = this.items.find((objeto) => objeto.id === product.id)

        if (productToUpdate) {
            Object.assign(productToUpdate, product) //pega tudo dos parametros e atualiza no producto atualizado, usando object.assign.
        } else {
            throw new Error(`Product not found`)
        }
    }
}
