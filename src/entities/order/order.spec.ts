import { test, expect } from 'vitest'
import { Order } from './order'

test('should be create an order', () => {
    let valor = 0

    const products = [
        {
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        },
        {
            id: 1,
            name: 'Notebook',
            price: 1000,
            description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
        },
        {
            id: 2,
            name: 'Celular',
            price: 2000,
            description: 'S23',
        },
    ]

    products.map((product) => {
        valor += product.price
        return valor
    })

    //como eu estou testando uma classe que tem getters e setters, eu preciso meio que duplicar a chamada da classe. Criando uma instância da classe e depois passando essa instância em uma outra chamada da mesma classe. Caso contrário, o teste não vi pegar os getters.
    const orderData = new Order({
        id: 1,
        products: products,
        value: valor,
    })

    const order = new Order(orderData)

    expect(order).toBeInstanceOf(Order)
    expect(order.props.id).toEqual(1)
    expect(order.props.products).toEqual(products)
    expect(order.props.value).toEqual(valor)
})
