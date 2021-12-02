const Post = require('../models/post.model')

async function getAllPosts() {
  const allPosts = await Post.find()

  return allPosts
}

/*async function getPostId() {
  const postId = await Post.find()

  return postId
}
*/
module.exports = {
  getAllPosts,
//  postId,
}
