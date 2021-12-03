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
    const id = req.params.id
//    console.log("🚀 ~ file: post.controller.js ~ line 64 ~ putPost ~ id", id)
    const postBody = req.body
//    console.log("🚀 ~ file: post.controller.js ~ line 62 ~ putPost ~ postBody", postBody)
    const postRenewd= await post.putPost(id, req)//{$set: {updateOps}} 
   
    res.json({  
      success: true,
      message: 'One Post',
      data: {
        post: postRenewd,
      }
    })

   } catch (error) {
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

module.exports = {
  getPost,
getPostId,
putPost,
}