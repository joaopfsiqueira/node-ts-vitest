import { StockRepository } from '../../repositories/stock-repository'

interface ICreateStockRequest {
    quantity: number
    product_id: number
}

export class UpdateStock {
    constructor(private stockRepository: StockRepository) {}

    async execute({ quantity, product_id }: ICreateStockRequest): Promise<any> {
        const stockAlreadyExists = await this.stockRepository.checkIfExist(product_id)

        const stock = {
            quantity,
            product_id,
        }

        if (stockAlreadyExists) {
            const stockToUpdate = await this.stockRepository.returnStockByProductId(product_id)
            await this.stockRepository.updateStock(stockToUpdate, stock)

            return { status: 200, message: 'Stock updated successfully' }
        } else {
            throw new Error('Stock does not exists')
        }
    }
}
