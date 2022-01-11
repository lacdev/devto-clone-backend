const post = require('../usecases/post.usecase')

const getPosts = async (req, res) => {
  try {
    const { date } = req.query

    if (date) {
      const topPosts = await post.getTopPostsByDate(date)
      res.json({
        success: true,
        message: 'Top Posts by ' + date,
        data: {
          posts: topPosts,
        },
      })
      return
    }

    const allPosts = await post.getAllPosts()

    res.json({
      success: true,
      message: 'All Posts',
      data: {
        posts: allPosts,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ success: false, message: 'Could not get all posts', error })
  }
}

async function getSinglePost(req, res) {
  try {
    //Process the request
    const id = req.params.id

    if (!id) throw new Error('Invalid ID')

    //Make use case
    const singlePost = await post.getPostById(id)

    if (!singlePost) throw new Error('Post not found')
    //Response to the client.
    res.json({
      success: true,
      message: 'Post found',
      data: {
        posts: singlePost,
      },
    })
  } catch (error) {
    console.error(error)

    switch (error.message) {
      case 'Invalid ID':
        res.statusCode = 400
        break
      case 'Post not found':
        res.statusCode = 404
        break
      default:
        res.statusCode = 500
        break
    }
    res.statusCode = error.message === 'Invalid ID' ? 400 : 500
    res.json({ success: false, message: 'Could not get post', error })
  }
}

async function savePost(req, res) {
  try {
    //Process the request
    const newPost = req.body

    //Make use case
    const savedPost = await post.createPost(newPost)

    //Response to the client.
    res.json({
      success: true,
      message: 'Post created successfully',
      data: {
        posts: savedPost,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = error.name === 'validationError' ? 400 : 500
    res.json({ success: false, message: 'Could not create post', error })
  }
}

const putPost = async (req, res) => {
  try {
    const id = req.params.id
    const postBody = req.body
    const postRenewd = await post.putPost(id, postBody) //{$set: {updateOps}}

    res.json({
      success: true,
      message: 'One Post',
      data: {
        post: postRenewd,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({
      success: false,
      message: 'Could not get the post',
      error,
    })
  }
}

async function deletePost(req, res) {
  try {
    //Process the request
    const id = req.params.id

    if (!id) throw new Error('Invalid ID')

    //Make use case
    const deletedPost = await post.deletePostById(id)

    if (!deletedPost) throw new Error('Post not found')
    //Response to the client.
    res.json({
      success: true,
      message: 'Post deleted successfully',
      data: {
        posts: deletedPost,
      },
    })
  } catch (error) {
    console.error(error)

    switch (error.message) {
      case 'Invalid ID':
        res.statusCode = 400
        break
      case 'Post not found':
        res.statusCode = 404
        break
      default:
        res.statusCode = 500
        break
    }
    res.statusCode = error.message === 'Invalid ID' ? 400 : 500
    res.json({ success: false, message: 'Could not delete post', error })
  }
}

module.exports = {
  getPosts,
  getSinglePost,
  savePost,
  deletePost,
  putPost,
}
