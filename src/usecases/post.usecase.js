const Post = require('../models/post.model')

async function getAllPosts() {
  const allPosts = await Post.find()

  return allPosts
}

module.exports = {
  getAllPosts,
}
