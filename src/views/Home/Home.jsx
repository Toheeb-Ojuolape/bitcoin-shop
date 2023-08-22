import React, { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import ajax from "../../ajax/ajax";
import Navbar from "../../components/NavBar/Navbar";
import useProductStore from "../../store/store";
import Checkout from "../../components/Checkout/Checkout";
import { toast } from "react-hot-toast";

function Home() {
  const [products, setProducts] = useState([]);
  const [checkout, setShowCheckout] = useState(false);
  const [productsincart, setProductsInCart] = useState(useProductStore.getState().products);
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
    const id = toast.loading("loading")
    useProductStore.getState().addProducts(product);
    setProductsInCart(useProductStore.getState().products)
    toast.dismiss(id)
    toast.success("Product added to cart")
  };

  const removeItem = (index) => {
    const updatedProducts = productsincart.slice(); // Create a copy of the array
    updatedProducts.splice(index, 1); // Modify the copied array
    useProductStore.getState().removeItem(updatedProducts); // Update the store state
    setProductsInCart(updatedProducts); 
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
