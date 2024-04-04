import "./style.css";

import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

//function to diplay the products as cards

showProductContainer(products);
