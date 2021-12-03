const Post = require('../models/post.model')
const logger = require('../middlewares/logger')

async function getAllPosts() {
  const allPosts = await Post.find()

  return allPosts
}

async function getPostId(id) {
  const postId = await Post.findById(id)

  return postId
}

async function putPost(id, req) {
  const updateOps = {}
  const postData = req.body
 console.log("🚀 ~ file: post.usecase.js ~ line 19 ~ putPost ~ body", req.body)
  
  for (const ops of postData) {
    updateOps[ops.propertyName] = ops.value
  }
  console.log("🚀 ~ file: post.usecase.js ~ line 23 ~ putPost ~ updateOps", updateOps)
  const updatePost = await Post.findByIdAndUpdate(id, updateOps )
 /*   { 
    $set: 
    {
      name: req.body.newName, 
      title: req.body.newTitle,
      imageURL: req.body.newImageURL,
      content: req.body.newContent,
      tags: req.body.newTags,
      date: req.body.newDate,
    }  } */ 
   
  console.log("🚀 ~ file: post.usecase.js ~ line 37 ~ putPost ~ updatePost", updatePost)
  


  return updatePost
}
module.exports = {
  getAllPosts,
 getPostId,
 putPost,
}
