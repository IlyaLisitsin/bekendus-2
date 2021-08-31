import products from './products.json';

export const main = async (event) => {
    try {
        const { id } = event.pathParameters;

        const product = JSON.parse(products).find(p => p.id === id);

        if (!product) {
            return {
                statusCode: 404,
                body: 'No product with such id',
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify(product),
        };
    } catch (e) {
        console.log(e);

        return {
            statusCode: 500,
            body: 'Sorry, pal, something went wrong',
        }
    }
};