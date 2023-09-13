export interface StockProps {
    quantity: number
    product_id: number
}

export class Stock {
    constructor(public stock: StockProps) {}

    get quantity(): number {
        return this.stock.quantity
    }

    get product_id(): number {
        return this.stock.product_id
    }
}
