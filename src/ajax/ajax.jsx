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

  async generateInvoice(amount){
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
      })
    };
    try{
      const response = await fetch("http://localhost:5000/invoice",requestOptions);
      const responseJson = await response.json();
      return responseJson;
    }
    catch(error){
      console.log(error)
    }
  }
};
