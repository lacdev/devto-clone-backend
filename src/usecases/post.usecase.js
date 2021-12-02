const Post = require('../models/post.model')

async function getAllPosts() {
  const allPosts = await Post.find()

  return allPosts
}

async function getPostId(id) {
  const postId = await Post.findById(id)

  return postId
}

async function putPost(id) {
  const updatePost = await Post.findByIdAndUpdate(id)

  return updatePost
}
module.exports = {
  getAllPosts,
 getPostId,
 putPost,
}
