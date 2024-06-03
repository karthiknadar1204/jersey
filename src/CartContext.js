import { createContext, useState } from "react";
import { products, getProductData } from "./ProductStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;
    return quantity || 0;
  }

  function addOneToCart(id) {
    const existingProduct = cartProducts.find((product) => product.id === id);
    if (!existingProduct) {
      const productData = getProductData(id);
      if (productData) {
        setCartProducts([...cartProducts, { ...productData, quantity: 1 }]);
      }
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    setCartProducts((prevCartProducts) => {
      const existingProduct = prevCartProducts.find((product) => product.id === id);
      if (existingProduct?.quantity === 1) {
        return prevCartProducts.filter((product) => product.id !== id);
      } else {
        return prevCartProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        );
      }
    });
  }

  function deleteFromCart(id) {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      totalCost += cartItem.cost * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
