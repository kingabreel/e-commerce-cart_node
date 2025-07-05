export default class Cart {
    constructor() {
        this.id = Date.now();
        this.userId = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.totalPrice = 0;
        this.totalItems = 0;
        this.discount = 0;
        this.tax = 0;
        this.shippingCost = 0;
        this.currency = 'USD';
        this.status = 'active';
        this.paymentMethod = null;
        this.shippingAddress = null;
        this.billingAddress = null;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
    }

    calculateTotal() {
        this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        this.totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        this.updatedAt = new Date();
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setShippingAddress(address) {
        this.shippingAddress = address;
    }

    setBillingAddress(address) {
        this.billingAddress = address;
    }

    setPaymentMethod(method) {
        this.paymentMethod = method;
    }

    setDiscount(discount) {
        this.discount = discount;
        this.calculateTotal();
    }

    setTax(tax) {
        this.tax = tax;
        this.calculateTotal();
    }

    setShippingCost(cost) {
        this.shippingCost = cost;
        this.calculateTotal();
    }

    setStatus(status) {
        this.status = status;
    }

    getCartDetails() {
        return {
            cartId: this.cartId,
            userId: this.userId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            totalPrice: this.totalPrice,
            totalItems: this.totalItems,
            discount: this.discount,
            tax: this.tax,
            shippingCost: this.shippingCost,
            currency: this.currency,
            status: this.status,
            paymentMethod: this.paymentMethod,
            shippingAddress: this.shippingAddress,
            billingAddress: this.billingAddress,
            items: this.items
        };
    }
}