const post = require('../usecases/post.usecase')

const getPost = async (req, res) => {
  try {
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
    res.json(
      { 
        success: false, 
        message: 'Could not get all koders', 
        error 
      })
  }
}

/*const getPostId = async (req, res) => {
  try {
   const postId = await post.postId()
   const id = req.params.id
  
   
  

   res.json({
    success: true,
    message: 'All Posts',
    data: {
      posts: postId,
    },
  })

  }catch (error){
    console.error(error)
    res.statusCode = 500
    res.json(
      { 
        success: false, 
        message: 'Could not get the post', 
        error 
      })
  }
}
*/
module.exports = {
  getPost,
/*  getPostId,*/

}