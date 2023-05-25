const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const ClienteModel = require('./src/models/ClienteModel')
const ClienteController = require(`./src/controllers/ClienteController`)

app.use(express.json())

// GET POST PUT DELETE

// GET localhost:3000/
app.get('/mississippi', (req, res) => {
  console.log('Fui invocado!')
  res.send('Hello World!')
})

app.post('/cliente', ClienteController.cadastrar)
app.get('/cliente/:idCliente', ClienteController.buscaClientePorId)
app.get('/cliente', ClienteController.buscaTodosClientes)



app.listen(port, async () => {
  try {
    await mongoose.connect('<SUA URL DO MONGO ATLAS>')
    console.log(`Conectado ao banco de dados MongoDB Atlas!`)
    console.log(`API Mentoria está online em: http://localhost:${port}`)

  } catch(error) {
    console.error(error)
  }
})
