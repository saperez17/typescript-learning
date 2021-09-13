
//Object types
function addToCart(product: { id: number, name: string }){
    console.log(`The product ${product.name} with id:${product.id} was added to the shopping cart`);
}
addToCart({ id:100, name:"Brand New Car" })

//Optional parameters in Object Types.
function startBusiness (obj: {field: string, capital?:number}){
    //Error. Might crash if capital property was not provided 
    console.log(`Starting new business in ${obj.field} with ${obj.capital} USD`);

    //Better to handle undefined cases
    if (obj.capital !== undefined){
        console.log(`Starting new business in ${obj.field} with ${obj.capital} USD`);
    }
}

startBusiness({field: 'Automobile market', capital:10000})