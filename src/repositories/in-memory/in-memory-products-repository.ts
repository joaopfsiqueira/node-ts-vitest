import { ProductsProps } from '../../entities/product/product'
import { ProductRepository } from '../products-repository'

export class InMemoryProductRepository implements ProductRepository {
    public items: ProductsProps[] = []

    constructor(private mockProduct: ProductsProps[]) {}

    async create(product: ProductsProps): Promise<void> {
        this.items.push(product)
    }

    async checkIfExist(product_id: number): Promise<boolean> {
        const mock = this.mockProduct.some((objeto) => objeto.id === product_id) ? true : false
        return mock
    }

    async returnProductById(product_id: number): Promise<ProductsProps> {
        const product = this.mockProduct.find((object) => object.id === product_id)

        if (product) {
            return product
        } else {
            throw new Error('Product not found')
        }
    }

    async updateProduct(productToUpdate: ProductsProps, product: ProductsProps): Promise<boolean> {
        try {
            Object.assign(productToUpdate, product) //pega tudo dos parametros e atualiza no producto atualizado, usando object.assign.
            return true
        } catch {
            throw new Error(`Product not found`)
        }
    }
}
