import React, { useState,useEffect } from "react";
import Products from "../../components/Products/Products";
import ajax from "../../ajax/ajax";
import Navbar from "../../components/NavBar/Navbar";
import useProductStore from "../../store/store";

function Home() {
  const [products,setProducts] = useState([])
  const productsincart = useProductStore((state)=>state.products)
  const addProduct = useProductStore((state) => state.addProduct);

  useEffect(() => {
    const fetchAllProducts = async () =>{
        try{
            const fetchProducts = await ajax.fetchProducts()
            setProducts(fetchProducts.data)
        }
        catch(error){
            console.log(error)
        }
    } 
    fetchAllProducts()
  }, []);

  const handleAddProduct = (product) =>{
    alert(product)
    console.log(product)
    // addProduct(product)
  }
  return (
    <div>
      <Navbar />
      <Products products={products} addProduct={handleAddProduct}/>

      {productsincart.length}
    </div>
  );
}

export default Home;
