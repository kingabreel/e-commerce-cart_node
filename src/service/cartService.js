import { Cart } from '../model/cart.js';
import { cartRepository as cartRepo } from '../repository/cartRepo.js';

const cartService = {
    getCarts: () => {
        return cartRepo.getCarts();
    },

    addCart: (cart) => {
        const newCart = new Cart(cart);
        cartRepo.addCart(newCart);
        return newCart;
    },

    updateCart: (cartId, updatedCart) => {
        const existingCart = cartRepo.getCartById(cartId);
        if (!existingCart) {
            throw new Error('Cart not found');
        }
        const updated = { ...existingCart, ...updatedCart };
        cartRepo.updateCart(cartId, updated);
        return updated;
    },

    deleteCart: (cartId) => {
        const existingCart = cartRepo.getCartById(cartId);
        if (!existingCart) {
            throw new Error('Cart not found');
        }
        cartRepo.deleteCart(cartId);
        return existingCart;
    },

    getCartById: (cartId) => {
        const cart = cartRepo.getCartById(cartId);
        if (!cart) {
            throw new Error('Cart not found');
        }
        return cart;
    },

    getCartByUserId: (userId) => {
        const cart = cartRepo.getCartByUserId(userId);
        if (!cart || cart.length === 0) {
            throw new Error('Cart not found for this user');
        }
        return cart;
    },

    clearCart: (userId) => {
        const existingCart = cartRepo.getCartByUserId(userId);
        if (!existingCart || existingCart.length === 0) {
            throw new Error('No cart found for this user');
        }
        cartRepo.clearCart(userId);
        return existingCart;
    }
}

export { cartService };