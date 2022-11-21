let userData = require("../../utils/bddUtils").userData;

async function getAllUser() {
  return userData.find();
}

async function getUserByName(name) {
  return userData.findOne({ name: name });
}

async function getUserById(id) {
  try {
    return userData.findById(id);
  } catch (e) {
    // TODO le catch ne fonctionne pas :(
    return "no user found";
  }
}

async function addUser(user) {
  let userToAdd = new userData(user);
  return await userToAdd.save();
}

async function updateUser(id, user) {
  return userData.findByIdAndUpdate(id, user);
}

async function deleteUserByName(name) {
  return userData.deleteOne({ name: name });
}

module.exports = {
  getAllUser: getAllUser,
  getUserById: getUserById,
  getUserByName: getUserByName,
  addUser: addUser,
  updateUser: updateUser,
  deleteUserByName: deleteUserByName,
};
