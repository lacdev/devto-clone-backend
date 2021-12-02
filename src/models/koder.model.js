const { Schema, model } = require('mongoose')

const koderSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    maxLength: 120,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    maxLength: 1,
    enum: ['m', 'f', 'x'],
  },
})

const Koder = model('koder', koderSchema)

//Exportamos el modelo Koder
module.exports = Koder

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
