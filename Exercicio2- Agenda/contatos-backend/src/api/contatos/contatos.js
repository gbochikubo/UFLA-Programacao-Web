const restful = require('node-restful')
const mongoose = restful.mongoose

const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    tipo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Contatos', contatoSchema)