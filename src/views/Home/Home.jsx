import React, { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import ajax from "../../ajax/ajax";
import Navbar from "../../components/NavBar/Navbar";
import useProductStore from "../../store/store";
import Checkout from "../../components/Checkout/Checkout";
import { toast } from "react-hot-toast";
import Cart from "../../components/Elements/Cart/Cart";
import handleError from "../../utils/handleError";

function Home() {
  const [products, setProducts] = useState([]);
  const [checkout, setShowCheckout] = useState(false);
  const [productsincart, setProductsInCart] = useState(
    useProductStore.getState().products
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchProducts = await ajax.fetchProducts();
        setProducts(fetchProducts.data);
        setLoading(false);
      } catch (error) {
        handleError(error.response.data.error);
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, [setLoading]);

  const handleAddProduct = (product) => {
    const id = toast.loading("loading");
    useProductStore.getState().addProducts(product);
    setProductsInCart(useProductStore.getState().products);
    toast.dismiss(id);
    toast.success("Product added to cart");
  };

  const removeItem = (index) => {
    const updatedProducts = productsincart.slice();
    updatedProducts.splice(index, 1);
    useProductStore.getState().removeItem(updatedProducts);
    setProductsInCart(updatedProducts);
  };

  const removeAllProducts = () => {
    useProductStore.getState().removeAllProducts();
    setProductsInCart([]);
  };

  const showCheckout = () => {
    setShowCheckout(!checkout);
    window.scroll(0, 0);
  };
  return (
    <div className="relative">
      <Navbar products={productsincart} showCheckout={showCheckout} />
      <Products
        products={products}
        addProduct={handleAddProduct}
        loading={loading}
      />

      <div
        className={
          productsincart.length >= 1
            ? "bounce-animation floating-cart"
            : "floating-cart"
        }
      >
        <Cart products={productsincart} showCheckout={showCheckout} />
      </div>
      {checkout && (
        <Checkout
          products={productsincart}
          closeCheckout={() => setShowCheckout(!checkout)}
          removeItem={removeItem}
          removeAllProducts={removeAllProducts}
        />
      )}
    </div>
  );
}

export default Home;
