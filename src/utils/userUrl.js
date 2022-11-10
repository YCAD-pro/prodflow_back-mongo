const userBdd = require("../entities/user/userMongo");
const app = require('../utils/urlUtils').app

app.get('/users',async (req, res, next) => {
    let userList = await userBdd.getAllUser()
    return res.json(userList)
})
app.get('/user/id/:id', async (req, res) => {
    let userId = req.params.id
    let userFind = await userBdd.getUserById(userId)
    return res.json(userFind)
})
app.get('/user/name/:name', async (req, res) => {
    let userName = req.params.name
    let userFind = await userBdd.getUserByName(userName)
    return res.json(userFind)
})
app.post('/user',async (req, res) => {
    const { name, password, email } = req.body
    let userToAdd = await userBdd.addUser({ name, password, email })
    res.json(userToAdd)
})
app.put('/user/:id', async (req, res) => {
    const updates= req.body
    const id = req.params.id
    let userToUpdate = await userBdd.updateUser(id, updates)
    res.json(userToUpdate)
})
app.delete('/user/:name', async (req, res) => {
    const userName = req.params.name
    let userDeleted = await userBdd.deleteUserByName(userName)
    res.json(userDeleted)
})