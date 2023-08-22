export default {
  async fetchProducts() {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/products");
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },

  async generateInvoice(amount, buyer,products) {
    let order = `"Purchase of ${products} by ${buyer.name}, Email: ${buyer.email}, Delivery address: ${buyer.address}"`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        name: buyer.name,
        email: buyer.email,
        address: buyer.address,
        order: order,
      }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/invoice",
        requestOptions
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
};
