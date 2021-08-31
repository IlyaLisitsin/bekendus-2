import products from './products.json';

export const main = async (event) => {
    try {
        return {
            statusCode: 200,
            body: products,
        };
    } catch (e) {
        console.log(e);

        return {
            statusCode: 500,
            body: 'Sorry, pal, something went wrong',
        }
    }
};