import { ProductRepository } from '../../repositories/products-repository'

interface ICreateProductRequest {
    id: number
    name: string
    price: number
    description: string
}
export class CreateProduct {
    constructor(private productRepository: ProductRepository) {}

    async execute({ id, name, price, description }: ICreateProductRequest): Promise<any> {
        const productAlreadyExists = await this.productRepository.checkIfExist(id)
        const product = {
            id,
            name,
            price,
            description,
        }

        if (productAlreadyExists) {
            const res = await this.productRepository.updateProduct(product)

            if (res) return { status: 200, message: 'Product updated successfully' }
        } else {
            throw new Error('Product does not exists')
        }
    }
}
