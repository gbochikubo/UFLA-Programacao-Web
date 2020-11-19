const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const contatosService = require('../api/contatos/contatosService')
    contatosService.register(router, '/contatos')
}