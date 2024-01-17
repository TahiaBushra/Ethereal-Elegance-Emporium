import './style.css'
import fetchProducts from './src/js/products';
import addToCart, { removeFromCart } from './src/js/cart';
import { cartModel, renderCartElement, updateCartCounter } from './src/js/render';
import './src/js/slide';

fetchProducts();
addToCart();
updateCartCounter();
cartModel();
renderCartElement();
removeFromCart();