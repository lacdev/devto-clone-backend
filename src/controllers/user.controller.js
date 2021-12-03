
async function savedKoder(request, res) {
    try {
      const newKoder = request.body //Ya es objeto por el moddleware
      const savedKoder = await koder.createKoder(newKoder)
      res.json({
        success: true,
        message: 'koder created successfully',
        data: {
          koders: savedKoder,
        },
      })
    } catch (error) {
      console.error(error)
      res.statusCode = 500
      res.json({ success: false, message: 'Could not save koders', error })
    }
  }
  