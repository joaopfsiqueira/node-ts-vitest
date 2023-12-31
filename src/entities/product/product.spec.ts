import { expect, test } from 'vitest'
import { Product } from './product'

test('create an product with id 1', () => {
    //como eu estou testando uma classe que tem getters e setters, eu preciso meio que duplicar a chamada da classe. Criando uma instância da classe e depois passando essa instância em uma outra chamada da mesma classe. Caso contrário, o teste não vi pegar os getters.
    const productData = new Product({
        id: 1,
        name: 'Notebook',
        price: 1000,
        description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
    })

    const product = new Product(productData)

    expect(product).toBeInstanceOf(Product) //como estamos instanciando, podemos usar o instanceof
    // validando os getters e seus retornos
    expect(product.props.name).toEqual('Notebook')
    expect(product.props.id).toEqual(1)
    expect(product.price).toEqual(1000)
    expect(product.props.description).toEqual('Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H')
})
