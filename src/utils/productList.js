//takes in an array of products and returns the names of the products as a string

export const productList = (products) =>{
    let productNames = ""
    products.forEach((product)=>{
        productNames += product.title+", "
    })
    return productNames
}