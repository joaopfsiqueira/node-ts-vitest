import { StockProps } from '../entities/stock/stock'

export interface StockRepository {
    create(stock: StockProps): Promise<void>
    checkIfExist(stock_id: number): Promise<boolean>
    updateStock(stock: StockProps): Promise<void>
}
