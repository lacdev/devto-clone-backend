const Post = require('../models/post.model')

async function getAllPosts() {
  //Latest
  return Post.find().sort({ date: -1 })
}

// async function getPostByName(name, sort) {
//   let previousDate = new Date()
//   if (name === '') return []

//   if (name && sort) {
//     if (sort === 'newest') {
//       return Post.find({
//         title: {
//           name,
//         },
//       }).sort({ reactions: -1 })
//     }

//     if (sort === 'oldest') {
//       return Post.find({
//         title: {
//           name,
//         },
//       }).sort({ reactions: 1 })
//     }
//   }
//   return Post.find({
//     title: {
//       name,
//     },
//   }).sort({ reactions: -1 })
// }

async function getTopPostsByDate(date = 'day') {
  let previousDate = new Date()

  //Relevant
  if (date === 'day') previousDate.setDate(previousDate.getDate() - 1)
  //Top week
  if (date === 'week') previousDate.setDate(previousDate.getDate() - 7)
  //Top Month
  if (date === 'month') previousDate.setDate(previousDate.getDate() - 30)
  //Top Year
  if (date === 'year') previousDate.setDate(previousDate.getDate() - 365)
  //Top infinity
  if (date === 'infinity') {
    return Post.find().sort({ reactions: -1 })
  }

  return Post.find({
    date: {
      $gte: new Date(previousDate),
      $lte: new Date(),
    },
  }).sort({ reactions: -1 })
}

async function getPostById(id) {
  return Post.findById(id)
}

async function createPost(post) {
  return Post.create(post)
}

async function putPost(id, body) {
  return await Post.findByIdAndUpdate(id, body)
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
  getTopPostsByDate,
}
