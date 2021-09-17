
const cors = require('cors')
const dotenv = require('dotenv');
const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser')

const dataBase = require('./database/databaseKnex.js');
const knex = require('./database/connection.js')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())  
dotenv.config();

app.get('/', async(req, res) => {
    // const response = await axios('https://jsonplaceholder.typicode.com/users') 
    //const apiKey = "${process.env.TMDB_KEY}"
    // response.data já é o dado em JSON

    const {data} = await axios(`https://api.themoviedb.org/4/list/7107496?api_key=${process.env.TMDB_KEY}&language=en-US&page=1&include_adult=false`) 
    //console.log(data)

  return res.json(data)
}) 


app.get('/comentarios', async (req, res)=>{
  
  const data = await dataBase.mostrarTodosComentarios()
  return res.send(data)
})


app.post('/insert', async (req, res)=>{
  const comentarioFeito = await dataBase.inserirComentario({
      nome: req.body.nome,
      comentario: req.body.comentario
      

  })
  res.send(comentarioFeito)   
})


app.use("/static", express.static('./static/'));
app.listen('4567')




