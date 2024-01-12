import './style.css'
import fetchProducts from './src/js/products';
import addToCart from './src/js/cart';
import store from './src/js/store';
import { updateCartCounter } from './src/js/render';

fetchProducts();
addToCart();
updateCartCounter();