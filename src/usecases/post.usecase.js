const Post = require('../models/post.model')

async function getAllPosts() {
  return Post.find()
}

async function createPost(post) {
  return Post.create(post)
}

async function deletePostById(id) {
  return Post.findByIdAndDelete(id)
}

module.exports = {
  getAllPosts,
  createPost,
  deletePostById,
}
