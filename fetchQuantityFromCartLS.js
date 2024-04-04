import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id,price) => {
    let cartProducts=getCartProductFromLS();
    let quantity = 1;

    let existingProduct=cartProducts.find((curProd)=> curProd.id===id);

    if(existingProduct){
        quantity=existingProduct.quantity;
        price=existingProduct.price;
    }
    return {quantity,price}
}