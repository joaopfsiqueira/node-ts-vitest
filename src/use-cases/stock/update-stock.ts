import { StockRepository } from '../../repositories/stock-repository'

interface ICreateStockRequest {
    quantity: number
    product_id: number
}

export class CreateProduct {
    constructor(private stockRepository: StockRepository) {}

    async execute({ quantity, product_id }: ICreateStockRequest): Promise<any> {
        const stockAlreadyExists = await this.stockRepository.checkIfExist(product_id)

        const stock = {
            quantity,
            product_id,
        }

        if (stockAlreadyExists) {
            const res = await this.stockRepository.updateStock(stock)

            if (res) return { status: 200, message: 'Stock atualizado com sucesso!' }
        } else {
            throw new Error('Stock does not exists')
        }
    }
}
