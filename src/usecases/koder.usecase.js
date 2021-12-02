const Koder = require('../models/koder.model')

async function getAllKoders() {
  const allKoders = await Koder.find()

  return allKoders
}

module.exports = {
  getAllKoders,
}
