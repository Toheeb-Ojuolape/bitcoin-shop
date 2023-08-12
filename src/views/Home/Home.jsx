import React, { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import ajax from "../../ajax/ajax";
import Navbar from "../../components/NavBar/Navbar";
import useProductStore from "../../store/store";
import Checkout from "../../components/Checkout/Checkout";

function Home() {
  const [products, setProducts] = useState([]);
  const [checkout, setShowCheckout] = useState(false);
  const productsincart = useProductStore((state) => state.products);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchProducts = await ajax.fetchProducts();
        setProducts(fetchProducts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

  const handleAddProduct = (product) => {
    useProductStore.getState().addProducts(product);
  };

  const removeItem = (index) => {
    productsincart.splice(index, 1);
    useProductStore.getState().removeItem(productsincart);
    useProductStore.getState()
  };
  return (
    <div className="relative">
      <Navbar
        products={productsincart}
        showCheckout={() => setShowCheckout(!checkout)}
      />
      <Products products={products} addProduct={handleAddProduct} />
      {checkout && (
        <Checkout
          products={productsincart}
          closeCheckout={() => setShowCheckout(!checkout)}
          removeItem={removeItem}
        />
      )}
    </div>
  );
}

export default Home;
