import { test, expect } from 'vitest';

import { Stock } from './stock';

test('insert stock of a product', () => {
  const stock = new Stock({
    quantity: 10,
    product: {
      id: 1,
      name: 'Notebook',
      price: 1000,
      description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
    },
  });

  expect(stock).instanceOf(Stock);
  expect(stock.stock.quantity).toBe(10);
});
