const Koder = require('../models/koder.model')
const { post } = require('../routers/koder.router')

async function getAllKoders() {
  const allKoders = await Koder.find()

  return allKoders
}

function createKoder({name, lastName, gender, age}) {
  return Koder.create({name, lastName, gender, age})
}

function deleteKoderById(id) {
  return Koder.findByIdAndDelete(id)
}
module.exports = {
  getAllKoders,
  createKoder,
  deleteKoderById,
}