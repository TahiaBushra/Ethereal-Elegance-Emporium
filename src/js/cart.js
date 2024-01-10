import fetchSingleProduct from "./single-product";

const productsWrapper = document.querySelector(".products_wrapper");

export default function addToCart() {
    productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
    if (e.target.classList.contains("add_to_cart_btn")) {
        const btn = e.target;
        const productId = +btn.dataset.id;
        const product = await fetchSingleProduct(productId, btn);
    }
}