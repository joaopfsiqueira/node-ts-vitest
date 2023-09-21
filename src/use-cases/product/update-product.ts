import { ProductRepository } from '../../repositories/products-repository'

interface ICreateProductRequest {
    id: number
    name: string
    price: number
    description: string
}
export class UpdateProduct {
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
            const productToUpdate = await this.productRepository.returnProductById(id)
            const res = await this.productRepository.updateProduct(productToUpdate, product)

            if (res) {
                return { status: 200, message: 'Product updated successfully' }
            } else {
                return { status: 400, message: 'Product not updated' }
            }
        } else {
            throw new Error('Product does not exists')
        }
    }
}
