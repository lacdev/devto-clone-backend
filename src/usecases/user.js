const User = require('../models/user.model')
const { hash } = require('../lib/bcrypt')

function getAll() {
    return User.find()
}
//Sing Up o registrarse
function createUser ({name, email, password}) {
    const encryptedPassword = await hash(password)
    return User.create({
        name,
         email, 
         password: encryptedPassword})
}

module.exports = {
    getAll,
    createUser,
}