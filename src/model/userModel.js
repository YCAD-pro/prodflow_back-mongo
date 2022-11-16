const userBdd = require("../entities/user/userMongo");

const listUsers = async (req, res, next) => {
    let userList = await userBdd.getAllUser()
    return res.json(userList)
}

const getUserById = async (req, res) => {
    let userId = req.params.id
    let userFind = await userBdd.getUserById(userId)
    return res.json(userFind)
}

const getUserByName = async (req, res) => {
    let userName = req.params.name
    let userFind = await userBdd.getUserByName(userName)
    return res.json(userFind)
}

const setUser = async (req, res) => {
    const {name, password, email} = req.body
    let userToAdd = await userBdd.addUser({name, password, email})
    res.json(userToAdd)
}

const updateUser = async (req, res) => {
    const updates = req.body
    const id = req.params.id
    let userToUpdate = await userBdd.updateUser(id, updates)
    res.json(userToUpdate)
}

const deleteUser = async (req, res) => {
    const userName = req.params.name
    let userDeleted = await userBdd.deleteUserByName(userName)
    res.json(userDeleted)
}

module.exports = {
    listUsers,
    getUserById,
    getUserByName,
    setUser,
    updateUser,
    deleteUser,
}