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
      required: true,
    },
    date: Date,
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postSchema)

module.exports = Post
