const app = require('../utils/urlUtils').app
const model = require("../model/userModel");

app.get('/users', model.listUsers);
app.get('/user/id/:id', model.getUserById);
app.get('/user/name/:name', model.getUserByName);
app.post('/user', model.setUser);
app.put('/user/:id', model.updateUser)
app.delete('/user/:name', model.deleteUser)