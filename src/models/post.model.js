const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: true,
    },
    title: {
      type: String,
      minLength: 10,
      maxLength: 150,
      required: true,
    },
    imageURL: {
      type: String,
      minLength: 150,
      maxLength: 150,
      required: true,
    },
    content: {
      type: String,
      minLength: 150,
      maxLength: 1000,
      required: true,
    },
    tags: {
      type: Array,
      "maxItems": 4,
      "items": {
                "type": "string"
               },
      required: true,
    },
    date: Date,
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postSchema)

module.exports = Post







// const newKoder = new Koder({
//   name: 'Rafa',
//   lastName: 'Martinez',
//   age: 18,
//   gender: 'm',
// })

// await Koder.create(newKoder)

// await Koder.create({
//     name: 'Luis',
//     age: 250,
//     gender: 'z',
//   })

//   const koders = await Koder.find({})
//   console.log(koders)
// })

//Schema

// Define propiedades, estructura y los tipos de un documento. Cuando creamos un
// documento internamente se validara que cumpla con la estructura y tipos del
// esquema.

/* const koderSchema = new mongoose.Schema({
    name: String,
    age: Number
}) */

//Tipos disponibles en el Schema

//Los tipos disponibles a usar en un schema de Mongoose son casi los mismos que
// los tipos de JS

// Array - []
// Boolean - true/false
// Buffer - Bytes
// Date - 2021-11-26
// *Mixed - Tipos de dato generico
// Number - 42
// ObjectId - 1092323238238
// Stirng - 'texto'

// definidos en mongoose.Schema.Types

//Modelo

/*
En Mongoose, un modelo nos permite crear y consultar documentos en una coleccion 
siguiendo un esquema. Para crear un modelo necesitamos darle el nombre de la 
collecion y el esquema a seguir.
El esquema define como deben ser los documentos, pero el modelo se encarga de
crear documentos.
const KodeModel = mongoose.model('Koder', koderSchema)
const newKoder = new KoderModel({
    name: "Un Koder",
    age: 15
})
*/

// import express from 'express'
// import json from 'body-parser'
// import cors from 'cors'
// import morgan from 'morgan'

// const app = express()

// app.use(cors())
// app.use(json())
// app.use(urlencoded({ extended: true }))
// app.use(morgan('dev'))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Welcome to Node Babel')
// })
