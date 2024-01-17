import { updateLocalStorage } from "./local-storage";
import { renderSingleProductError } from "./render";

let basket = JSON.parse(localStorage.getItem("basket")) || [];
export default function store(action = "VIEW_BASKET", product) {
    switch (action) {
        case "ADD_PRODUCT":
            const existedProduct = basket.find((pr) => pr.id === product.id);
            if (existedProduct) {
                renderSingleProductError("You already added this product");
            } else {
                basket.push(product);
                updateLocalStorage("basket", basket);
            }
        case "REMOVE_PRODUCT":
            const newBasket = basket.filter((pr) => pr.id !== product)
            basket = newBasket;
            updateLocalStorage("basket", basket);
        case "VIEW_BASKET":
            return basket;
    }
}