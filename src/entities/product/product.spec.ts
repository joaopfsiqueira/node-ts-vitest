import { expect, test } from 'vitest'
import { Product } from './product'

test('create an product with id 1', () => {
    const productData = new Product({
        id: 1,
        name: 'Notebook',
        price: 1000,
        description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
    })

    const product = new Product(productData)

    expect(product).toBeInstanceOf(Product) //como estamos instanciando, podemos usar o instanceof
    expect(product.props.name).toEqual('Notebook')
    expect(product.props.id).toEqual(1)
})
