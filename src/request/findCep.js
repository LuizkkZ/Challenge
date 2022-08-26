const api = require('../utils/api')

const url = '/ws'

async function findCep(cep) {
  const res = await api.get(`${url}/${cep}/json`)
  return res.data
}

module.exports = { findCep }