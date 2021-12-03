const bcrypt = require('bcrypt') 

const DEFAULT_SALT_ROUNDS = 10

function hash( plainText ){
    return bcrypt.hash(plainText, DEFAULT_SALT_ROUNDS)
}

// Este hash sobreescribe el hast de la funcion de arriba
module.exports =  {
    ...bcrypt,
    hash
}