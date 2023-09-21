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
            const res = await this.stockRepository.updateStock(stockToUpdate, stock)

            if (res) {
                return { status: 200, message: 'Stock updated successfully' }
            } else {
                return { status: 400, message: 'Stock not updated' }
            }
        } else {
            throw new Error('Stock does not exists')
        }
    }
}
