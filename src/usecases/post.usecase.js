const Post = require('../models/post.model')

async function getAllPosts() {
  return Post.find()
}

async function getPostById(id) {
  return Post.findById(id)
}

async function createPost(post) {
  return Post.create(post)
}

async function deletePostById(id) {
  return Post.findByIdAndDelete(id)
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePostById,
}
