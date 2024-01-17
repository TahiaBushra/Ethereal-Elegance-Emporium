import { renderCartElement, updateCartCounter } from "./render";
import fetchSingleProduct from "./single-product";
import store from "./store";

const productsWrapper = document.querySelector(".products_wrapper");
const cartItemsEl = document.querySelector(".cart_items")

export default function addToCart() {
    productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
    if (e.target.classList.contains("add_to_cart_btn")) {
        const btn = e.target;
        const productId = +btn.dataset.id;
        const product = await fetchSingleProduct(productId, btn);
        store("ADD_PRODUCT", product);
        updateCartCounter();
        renderCartElement();
    }
}

export function removeFromCart() {
    cartItemsEl.addEventListener('click', e => productsRemover(e))
}

function productsRemover(e) {
    if (e.target.closest(".remove_item_btn")) {
        const btn = e.target.closest(".remove_item_btn");
        const productId = +btn.dataset.id;
        store("REMOVE_PRODUCT", productId);
        updateCartCounter();
        renderCartElement();
    }
}