import { expect, test } from 'vitest';
import { Product } from './product';

test('create an product', () => {
  const product = new Product({
    name: 'Notebook',
    price: 1000,
    description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
  });

  expect(product).toBeInstanceOf(Product); //como estamos instanciando, podemos usar o instanceof
  expect(product.props.name).toEqual('Notebook');
});
