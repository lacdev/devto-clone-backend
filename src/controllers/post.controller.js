const post = require('../usecases/post.usecase')

const getPost = async (req, res) => {
  try {
    const allPosts = await post.getAllPosts()
    res.json({
      success: true,
      message: 'All Posts',
      data: {
        koders: allPosts,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ success: false, message: 'Could not get all koders', error })
  }
}

module.exports = {
  getPost,
}
