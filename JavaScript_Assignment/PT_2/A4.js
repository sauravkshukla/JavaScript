function findMinMaxPrice(products) {
    let maxProduct = products[0];
    let minProduct = products[0];

    for (let product of products) {
        if (product.price > maxProduct.price) maxProduct = product;
        else if (product.price < minProduct.price) minProduct = product;
    }

    console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
    console.log(`The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`);
}

const productList = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 }
];

findMinMaxPrice(productList);
