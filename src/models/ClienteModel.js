const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  nome: String,
  aniversario: { type: Date, default: Date.now },
  endereco: String,
  cep: String,
  estado: String,
  email: String,
  telefone: String,
  cpf: {
    type: String,
    required: true
  },
})

const ClienteModel = mongoose.model('Cliente', ClienteSchema)


module.exports = ClienteModel