import { StockRepository } from '../../repositories/stock-repository'
import { Stock } from '../../entities/stock/stock'

interface ICreateStockRequest {
    quantity: number
    product_id: number
}

export class CreateStock {
    constructor(private stockRepository: StockRepository) {}

    async execute({ quantity, product_id }: ICreateStockRequest): Promise<any> {
        const stockAlreadyExists = await this.stockRepository.checkIfExist(product_id)

        if (stockAlreadyExists) {
            return {
                status: 403,
                message:
                    'Product in stock already exists! Try again with a different product_id or try update the stock!',
            }
        }

        const stock = new Stock({ quantity, product_id })

        await this.stockRepository.create(stock)
        return stock
    }
}
