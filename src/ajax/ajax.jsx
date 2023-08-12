export default {
  async fetchProducts() {
    try {
      const response = await fetch("http://localhost:5000/products");
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
};
