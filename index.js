require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/lib/server')

dbConnect(process.env)
  .then(() => {
    console.log('DB Connected')
    server.listen(process.env.PORT, () => {
      console.log(`Server is up and running`)
    })
  })
  .catch((error) => console.log(error))
