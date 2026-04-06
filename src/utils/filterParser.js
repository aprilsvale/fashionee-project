export const parseFilters = (products) => {

    const categories = [...new Set(products.map(product => product.category))];

    const colors = [...new Set(products.flatMap(product => product.color || []))];

    const prices = products.map(product => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return {
        categories,
        colors,
        priceRange: {
            min: minPrice,
            max: maxPrice
        }
    };
};