import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProductElement = document.querySelector(`#card${id}`);
  let quantity =
    currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  console.log(existingProduct);

  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  if (existingProduct) {
    //alert("Product Already In Cart");
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  //console.log(quantity,price);
};
