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

async function putPost(id, req) {
  const updateOps = {}
  const postData = req.body
  console.log('🚀 ~ file: post.usecase.js ~ line 19 ~ putPost ~ body', req.body)

  for (const ops of postData) {
    updateOps[ops.propertyName] = ops.value
  }
  console.log(
    '🚀 ~ file: post.usecase.js ~ line 23 ~ putPost ~ updateOps',
    updateOps
  )
  const updatePost = await Post.findByIdAndUpdate(id, updateOps)
  console.log(
    '🚀 ~ file: post.usecase.js ~ line 37 ~ putPost ~ updatePost',
    updatePost
  )

  return updatePost
}

async function deletePostById(id) {
  return Post.findByIdAndDelete(id)
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePostById,
  putPost,
}
