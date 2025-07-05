import { User } from '../model/user.js';
import { userRepository } from '../repository/userRepo.js';

const userService = {
    getUsers: () => {
        return userRepository.getUsers();
    },

    addUser: (userData) => {
        const newUser = new User();
        newUser.setUsername(userData.username);
        newUser.setEmail(userData.email);
        newUser.setPassword(userData.password);
        userRepository.addUser(newUser);
        return newUser;
    },

    updateUser: (userId, updatedData) => {
        const existingUser = userRepository.getUserById(userId);
        if (!existingUser) {
            throw new Error('User not found');
        }
        const updatedUser = { ...existingUser, ...updatedData };
        userRepository.updateUser(userId, updatedUser);
        return updatedUser;
    },

    deleteUser: (userId) => {
        const existingUser = userRepository.getUserById(userId);
        if (!existingUser) {
            throw new Error('User not found');
        }
        userRepository.deleteUser(userId);
        return existingUser;
    },

    getUserById: (userId) => {
        const user = userRepository.getUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    },

    getUserByEmail: (email) => {
        const user = userRepository.getUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    },

    clearUsers: () => {
        userRepository.clearUsers();
        return 'All users cleared';
    }
};

export { userService };