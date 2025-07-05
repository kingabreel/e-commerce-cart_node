export default class User {
    constructor() {
        this.id = Date.now();
        this.username = '';
        this.email = '';
        this.password = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isActive = true;
        this.role = 'customer';
    }

    setUsername(username) {
        this.username = username;
        this.updatedAt = new Date();
    }

    setEmail(email) {
        this.email = email;
        this.updatedAt = new Date();
    }

    setPassword(password) {
        this.password = password;
        this.updatedAt = new Date();
    }

    deactivate() {
        this.isActive = false;
        this.updatedAt = new Date();
    }

    activate() {
        this.isActive = true;
        this.updatedAt = new Date();
    }
}