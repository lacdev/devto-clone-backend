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

const getPostId = async (req, res) => {
  
  
   try { 
    const id = req.params.id
    console.log(id)
   const postFound = await post.getPostId(id)
   
  
   //console.log('Imprimiendo request',req)
  

    res.json({  
    success: true,
    message: 'One Post',
    data: {
      post: postFound,
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

const putPost = async (req , res) => {
   try {

   } catch {

   }
}

module.exports = {
  getPost,
getPostId,
putPost,
}