const cartRepository = {

    carts: [],

    getCarts: () => {
        return cartRepository.carts;
    },

    addCart:(cart) => {
        cartRepository.carts.push(cart);
    },

    updateCart: (cartId, updatedCart) => {
        index = cartRepository.carts.findIndex(cart => cart.id === cartId);
        if (index !== -1) {
            cartRepository.carts[index] = { ...cartRepository.carts[index], ...updatedCart };
        }
    },

    deleteCart: (cartId) => {
        cartRepository.carts = cartRepository.carts.filter(cart => cart.id !== cartId);
    },

    getCartById: (cartId) => {
        return cartRepository.carts.find(cart => cart.id === cartId);
    },

    getCartByUserId: (userId) => {
        return cartRepository.carts.filter(cart => cart.userId === userId);
    },

    clearCart: (userId) => {
        cartRepository.carts = cartRepository.carts.filter(cart => cart.userId !== userId);
    }
}

export {cartRepository};