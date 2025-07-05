let users = [];

const getUsers = () => {
    return users;
}

const addUser = (user) => {
    users.push(user);
}

const updateUser = (userId, updatedUser) => {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
    }
}

const deleteUser = (userId) => {
    users = users.filter(user => user.id !== userId);
}

const getUserById = (userId) => {
    return users.find(user => user.id === userId);
}

const getUserByEmail = (email) => {
    return users.find(user => user.email === email);
}

const clearUsers = () => {
    users = [];
}

module.exports = {getUsers, addUser, updateUser, deleteUser, getUserById, getUserByEmail, clearUsers};