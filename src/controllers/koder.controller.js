const koder = require('../usecases/koder.usecase')


//Logica de los Endpoints (handlers)
const getKoder = async (req, res) => {
  try {
    const allKoders = await koder.getAllKoders()
    res.json({
      success: true,
      message: 'All Koders',
      data: {
        koders: allKoders,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ success: false, message: 'Could not get all koders', error })
  }
}

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

async function deletedKoder(request, res) {
  try {
    const id = request.params.id 

    if (!id) throw new Error('Koder Not Found')

    const deletedKoder = await koder.deleteKoderById(id)
    res.json({
      success: true,
      message: 'koder deleted successfully',
      data: {
        koders: deletedKoder,
      },
    })
  } catch (error) {
    console.error(error)
    res.statusCode = error.message === 'Invaid ID' ? 400 : 500
    res.json({ success: false, message: 'Could not deleted koder', error })
  }
}
module.exports = {
  getKoder,
  savedKoder,
  deletedKoder,
}
