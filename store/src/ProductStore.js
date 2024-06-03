import logo from "./assets/logo.png"

const products = [
    { id: "price_1PNQiGSDgo37ugH7wGC4l70F", name: "Product 1", image: logo, cost: 4.99 },
    { id: "price_1PNQjkSDgo37ugH7SfpWFDdy", name: "Product 2", image: logo, cost: 5.99 },
    { id: "price_1PNQkfSDgo37ugH7IZPvK7Hq", name: "Product 3", image: logo, cost: 39.99 },
    // { id: 4, name: "Product 4", image: logo, cost: 5 },
    // { id: 5, name: "Product 5", image: logo, cost: 5 },
    // { id: 6, name: "Product 6", image: logo, cost: 5 },
  ];


  function getProductData(id) {
    let productData = products.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}


export { products, getProductData };
