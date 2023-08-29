//takes in an array of products and returns the names of the products as a string
export const productList = (products) =>{
    let productIndex = []
    products.forEach((product)=>{
        productIndex.push(product.id)
    })
    return productIndex
}