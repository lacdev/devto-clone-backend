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
      maxLength: 500,
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
      required: true,
    },
    date: String,
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postSchema)

module.exports = Post

/* 
//Schema

// Define propiedades, estructura y los tipos de un documento. Cuando creamos un
// documento internamente se validara que cumpla con la estructura y tipos del
// esquema. */

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
