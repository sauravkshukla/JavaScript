function printProductDetails(product) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`color: ${product.color}`);
    console.log(`hardDisk: ${product.hardDisk}`);
}

const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB"
};

printProductDetails(productDetails);
