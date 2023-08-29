import axios from "axios";
import handleError from "../utils/handleError";

export default {
  async fetchProducts() {
    try {
      const response = await axios({
        method: "GET",
        url: import.meta.env.VITE_API_URL + "/products",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.error)
      return error
    }
  },

  async generateInvoice(buyer, products) {
    let order = `"Purchase of ${products} by ${buyer.name}, Email: ${buyer.email}, Delivery address: ${buyer.address}"`;
    try {
      const response = await axios({
        method: "POST",
        url: import.meta.env.VITE_API_URL + "/invoice",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: buyer.name,
          email: buyer.email,
          address: buyer.address,
          order: order,
          products: products,
        },
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.error)
    }
  },
};
