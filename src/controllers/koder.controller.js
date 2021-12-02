const koder = require('../usecases/koder.usecase')

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

module.exports = {
  getKoder,
}
