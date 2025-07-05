let carts = [];

const getCarts = () => {
    return carts;
}

const addCart = (cart) => {
    carts.push(cart);
}

const updateCart = (cartId, updatedCart) => {
    const index = carts.findIndex(cart => cart.id === cartId);
    if (index !== -1) {
        carts[index] = { ...carts[index], ...updatedCart };
    }
}

const deleteCart = (cartId) => {
    carts = carts.filter(cart => cart.id !== cartId);
}

const getCartById = (cartId) => {
    return carts.find(cart => cart.id === cartId);
}

const getCartByUserId = (userId) => {
    return carts.filter(cart => cart.userId === userId);
}

const clearCart = (userId) => {
    carts = carts.filter(cart => cart.userId !== userId);
}

module.exports = {getCarts, addCart, updateCart, deleteCart, getCartById, getCartByUserId, clearCart};