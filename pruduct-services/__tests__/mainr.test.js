import { main as getProdsById } from '../getProductsByIdHandler';
import { main as getProductsList } from '../getProductsListHandler';
import products from '../products.json';

test('gets product by id', async () => {
    const productsParsed = JSON.parse(products);
    const randomId = productsParsed[Math.floor(Math.random() * productsParsed.length)].id;

    const res = await getProdsById({ pathParameters: { id: randomId } });
    expect(res.body).toBe(JSON.stringify(productsParsed.find(e => e.id === randomId)));
});

test('returns all the products', async () => {
    const res = await getProductsList();
    expect(res.body).toBe(products);
});