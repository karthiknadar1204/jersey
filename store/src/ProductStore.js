import logo from "./assets/logo.png"

const products = [
    { id: 1, name: "Product 1", image: logo, cost: 5 },
    { id: 2, name: "Product 2", image: logo, cost: 5 },
    { id: 3, name: "Product 3", image: logo, cost: 5 },
    { id: 4, name: "Product 4", image: logo, cost: 5 },
    { id: 5, name: "Product 5", image: logo, cost: 5 },
    { id: 6, name: "Product 6", image: logo, cost: 5 },
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
