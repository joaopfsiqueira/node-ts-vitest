import { StockProps } from '../../entities/stock/stock'
import { StockRepository } from '../stock-repository'

export class InMemoryStockRepository implements StockRepository {
    public items: StockProps[] = []

    constructor(private mockStock: StockProps[]) {}

    async create(stock: StockProps): Promise<void> {
        this.items.push(stock)
    }

    async checkIfExist(product_id: number): Promise<boolean> {
        return this.items.some((objeto) => objeto.product_id === product_id)
            ? true
            : this.mockStock.some((objeto) => objeto.product_id === product_id)
            ? true
            : false
    }

    async returnStockByProductId(product_id: number): Promise<StockProps> {
        const stock = this.mockStock.find((objeto) => objeto.product_id === product_id)

        if (stock) {
            return stock
        } else {
            throw new Error('Product not found')
        }
    }

    async updateStock(stockToUpdate: StockProps, stock: StockProps): Promise<boolean> {
        try {
            Object.assign(stockToUpdate, stock)
            return true
        } catch {
            throw new Error(`Product not Found`)
        }
    }
}
