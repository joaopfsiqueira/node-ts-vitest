import { StockProps } from '../../entities/stock/stock'

export class InMemoryStockRepository {
    public items: StockProps[] = []

    async create(stock: StockProps): Promise<void> {
        this.items.push(stock)
    }

    async checkIfExist(product_id: number): Promise<boolean> {
        return this.items.some((objeto) => objeto.product_id === product_id)
    }

    async updateStock(stock: StockProps): Promise<void> {
        const stockToUpdate = this.items.find((objeto) => objeto.product_id === stock.product_id)

        if (stockToUpdate) {
            stockToUpdate.quantity = stock.quantity
        } else {
            throw new Error('Product not found')
        }
    }
}