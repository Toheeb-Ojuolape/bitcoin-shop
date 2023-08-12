export const sumAmount = (products)=>{
    return products.reduce((arr,cur) => arr+cur.price,0)
}