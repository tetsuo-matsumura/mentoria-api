const ClienteModel = require('../models/ClienteModel')
const ClienteController = {}

ClienteController.cadastrar = async (req, res) => {
  let { email, nome, cpf, endereco } = req.body

  try {
    let novoCliente = await ClienteModel.create({
      email: email,
      nome: nome,
      cpf: cpf,
      endereco: endereco
    })

    res.json({
      message: "Cliente criado com sucesso!",
      payload: novoCliente
    })
    
  } catch (error) {
    console.log("Deu ruim colega!", error)
    res.status(422).json({
      message: "Deu erro",
      error: error
    })
  }
}

ClienteController.buscaClientePorId = async (req, res) => {
  let { idCliente } = req.params
  try {
    let cliente = await ClienteModel.findById(idCliente)
    res.json({
      payload: cliente
    })
  } catch (error) {
    console.log("Deu ruim colega!", error)
    res.status(422).json({
      message: "Deu erro",
      error: error
    })
  }
}

ClienteController.buscaTodosClientes = async (req, res) => {
  try {
    let clientes = await ClienteModel.find()
    res.json({
      payload: clientes
    })
  } catch (error) {
    console.log("Deu ruim colega!", error)
    res.status(422).json({
      message: "Deu erro",
      error: error
    })
  }
}

module.exports = ClienteController