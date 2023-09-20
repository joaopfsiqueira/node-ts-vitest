import { ProductRepository } from '../../repositories/products-repository'
import { Product } from '../../entities/product/product'

interface ICreateProductRequest {
    id: number
    name: string
    price: number
    description: string
}

type CreateProductResponse = Product

export class CreateProduct {
    constructor(private productRepository: ProductRepository) {}

    async execute({
        id,
        name,
        price,
        description,
    }: ICreateProductRequest): Promise<CreateProductResponse> {
        const productAlreadyExists = await this.productRepository.checkIfExist(id)

        if (productAlreadyExists) {
            throw new Error('Product already exists')
        }

        const product = new Product({ id, name, price, description })

        await this.productRepository.create(product)
        return product
    }
}
