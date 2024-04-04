import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement = (event,id,stock,price) =>{
    const currentCardElement=document.querySelector(`#card${id}`);
    //console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector(".productQuantity");

    const productPrice= currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice=0;

    let LocalCartProducts = getCartProductFromLS();

    let existingProduct=LocalCartProducts.find((curProd)=>curProd.id===id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice=existingProduct.price;
    }else{
        localStoragePrice=price;
        price=price;
    }

    if((event.target.className==="cartIncrement")){
        if(quantity<stock){
            quantity +=1;
            }
        else if(quantity===stock){
            quantity=stock;
            localStoragePrice=price*stock;
            }
        }

        if((event.target.className==="cartDecrement")){
            if(quantity>1){
                quantity -=1;
            }
        }

    
    localStoragePrice=price*quantity;
    localStoragePrice=Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };
    updatedCart = LocalCartProducts.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productQuantity.innerText= quantity;
    productPrice.innerText=localStoragePrice;

};