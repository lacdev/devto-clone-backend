//lib: codigos de soporte que se pueden utilizar en algun otro lado



const mongoose = require('mongoose')

const connect = ({ DB_USER, DB_HOST, DB_PASSWORD, DB_NAME }) => {
  const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

  return mongoose.connect(URL)
}

module.exports = connect
