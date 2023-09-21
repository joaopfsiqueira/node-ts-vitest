import { StockProps } from '../entities/stock/stock'

export interface StockRepository {
    create(stock: StockProps): Promise<void>
    checkIfExist(stock_id: number): Promise<boolean>
    returnStockByProductId(product_id: number): Promise<StockProps>
    updateStock(stockToUpdate: StockProps, stock: StockProps): Promise<boolean>
}
