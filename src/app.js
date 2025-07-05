import { userService } from './service/userService.js';
import { cartService } from './service/cartService.js';
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

async function promptUser(prompt, validator = null) {
    let value;
    while (true) {
        value = (await rl.question(prompt)).trim();
        if (!validator || validator(value)) break;
        console.log('Invalid input. Please try again.');
    }
    return value;
}

async function start() {
    console.log('E-commerce Cart Service is running...');

    while (true) {
        const action = await promptUser(
            '\nChoose an action:\n' +
            '(1) Add User\n' +
            '(2) Get User\n' +
            '(3) Add Cart\n' +
            '(4) Get Cart\n' +
            '(5) Get User with Cart\n' +
            '(6) List All Users\n' +
            '(7) Exit\n> '
        );

        try {
            switch (action) {
                case '1': {
                    const username = await promptUser('Enter username: ', val => val.length >= 3);
                    const email = await promptUser('Enter email: ', validateEmail);
                    const password = await promptUser('Enter password (min 6 chars): ', val => val.length >= 6);

                    userService.addUser({ username, email, password });
                    console.log('User added successfully.');
                    break;
                }
                case '2': {
                    const userId = await promptUser('Enter user ID: ');
                    const user = userService.getUserById(Number(userId));
                    console.log('User details:', user);
                    break;
                }
                case '3': {
                    const cartData = await promptUser('Enter cart data as JSON: ');
                    try {
                        const cart = JSON.parse(cartData);
                        if (!cart.userId) throw new Error('userId is required');
                        cartService.addCart(cart);
                        console.log('Cart added successfully.');
                    } catch (e) {
                        console.error('Invalid cart data:', e.message);
                    }
                    break;
                }
                case '4': {
                    const cartId = await promptUser('Enter cart ID: ');
                    const foundCart = cartService.getCartById(Number(cartId));
                    console.log('Cart details:', foundCart);
                    break;
                }
                case '5': {
                    const userId = await promptUser('Enter user ID: ');
                    const user = userService.getUserById(Number(userId));
                    const cart = cartService.getCartByUserId(Number(userId));
                    console.log('User:', user);
                    console.log('Cart(s):', cart);
                    break;
                }
                case '6': {
                    const users = userService.getUsers();
                    console.log('Users:', users);
                    break;
                }
                case '7':
                    console.log('Exiting...');
                    rl.close();
                    return;
                default:
                    console.log('Invalid action. Please choose a valid option.');
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    }
}

start();
