# E-commerce CLI Cart Service

This is a simple CLI-based e-commerce service to manage users and shopping carts using Node.js.

## Getting Started
Make sure you have Node.js installed. To run the CLI:

```bash
node app.js
```
or
```bash
npm start
```

When the application starts, you will see:
```
Choose an action:
(1) Add User
(2) Get User
(3) Add Cart
(4) Get Cart
(5) Get User with Cart
(6) List All Users
(7) Exit
> 
```

## 1. Add a User
Choose option 1 and provide the required details:
```bash
Enter username: johndoe
Enter email: johndoe@example.com
Enter password: mysecurepassword
```
This will create a new user with a unique ID (e.g., 1720199381154).

## 2. Add a Cart
Choose option 3. You’ll be prompted to paste cart data as JSON. Here's an example you can copy and paste (changing the user id):
```bash
{
  "userId": 1720199381154,
  "items": [
    {
      "id": 101,
      "name": "Wireless Headphones",
      "price": 200,
      "quantity": 1
    },
    {
      "id": 102,
      "name": "Keyboard",
      "price": 150,
      "quantity": 2
    }
  ],
  "shippingAddress": "123 Main Street, New York, NY",
  "billingAddress": "456 Payment Ave, New York, NY",
  "paymentMethod": "credit_card",
  "discount": 50,
  "tax": 30,
  "shippingCost": 20,
  "currency": "USD",
  "status": "active"
}
```

## 3. Get Cart or User + Cart
To retrieve a cart by its ID: use option 4.

To retrieve a user with their cart(s): use option 5.

## 4. List All Users
Choose option 6 to view all users

## Features
- In-memory storage (no database required)

- User creation and validation

- Cart creation with items and price calculations

- Retrieve user with associated cart(s)
