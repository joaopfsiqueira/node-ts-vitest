import { StockRepository } from '../../repositories/stock-repository'
import { Stock } from '../../entities/stock/stock'

interface ICreateStockRequest {
    quantity: number
    product_id: number
}

//criando o typo response que vai ser igual à um stock
type CreateStockResponse = Stock

export class CreateProduct {
    constructor(private stockRepository: StockRepository) {}

    async execute({ quantity, product_id }: ICreateStockRequest): Promise<CreateStockResponse> {
        const stockAlreadyExists = await this.stockRepository.checkIfExist(product_id)

        if (stockAlreadyExists) {
            throw new Error(
                'Product in stock already exists! Try again with a different product_id or try update the stock!',
            )
        }

        const stock = new Stock({ quantity, product_id })

        await this.stockRepository.create(stock)
        return stock
    }
}
