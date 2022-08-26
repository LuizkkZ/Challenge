const axios = require('axios')

const api = axios.create({
  baseURL: 'https://viacep.com.br',
  timeout: 500
})

module.exports = api