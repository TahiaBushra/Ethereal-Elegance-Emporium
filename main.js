import './style.css'
import fetchProducts from './src/js/products';
import addToCart from './src/js/cart';
import { cartModel, updateCartCounter } from './src/js/render';

fetchProducts();
addToCart();
updateCartCounter();
cartModel();