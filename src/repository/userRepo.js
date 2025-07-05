const userRepository = {
    users: [],

    getUsers: () => {
        return userRepository.users;
    },

    addUser: (user) => {
        userRepository.users.push(user);
    },

    updateUser: (userId, updatedUser) => {
        const index = userRepository.users.findIndex(user => user.id === userId);
        if (index !== -1) {
            userRepository.users[index] = { ...userRepository.users[index], ...updatedUser };
        }
    },

    deleteUser: (userId) => {
        userRepository.users = userRepository.users.filter(user => user.id !== userId);
    },

    getUserById: (userId) => {
        return userRepository.users.find(user => user.id === userId);
    },

    getUserByEmail: (email) => {
        return userRepository.users.find(user => user.email === email);
    },

    clearUsers: () => {
        userRepository.users = [];
    }
}

export { userRepository };