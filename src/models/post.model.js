const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: false
    },
    title: {
      type: String,
      minLength: 4,
      maxLength: 150,
      required: false
    },
    imageURL: {
      type: String,
      maxLength: 500,
      required: false
    },
    content: {
      type: String,
      maxLength: 1000,
      required: false
    },
    tags: {
      type: Array,
      required: false
    },
    reactions: {
      type: Number,
      required: true,
      max: 250,
    },
    avatar: {
      type: String,
      required: true,
    },
    date: Date,
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postSchema)

module.exports = Post
