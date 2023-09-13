import { StockProps } from '../../entities/stock/stock'
import { StockRepository } from '../stock-repository'

export class InMemoryStockRepository implements StockRepository {
    public items: StockProps[] = []

    async create(stock: StockProps): Promise<void> {
        this.items.push(stock)
    }

    async checkIfExist(product_id: number): Promise<boolean> {
        return this.items.some((objeto) => objeto.product_id === product_id)
    }

    async updateStock(stock: StockProps): Promise<boolean> {
        const stockToUpdate = this.items.find((objeto) => objeto.product_id === stock.product_id)

        if (stockToUpdate) {
            stockToUpdate.quantity = stock.quantity
            return true
        } else {
            throw new Error('Product not found')
        }
    }
}
