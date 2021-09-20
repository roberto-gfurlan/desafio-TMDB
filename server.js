
const cors = require('cors')
const dotenv = require('dotenv');
const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path')
const moment = require('moment')
const handlebars = require("express-handlebars")
const Comentario = require('./models/salvarcomentario')

const db = require ('./models/db')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers:{
      formatDate: (date) => {
          return moment(date).format('DD/MM/YYYY')
      }
  },
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
  },
}))
app.set('view engine', 'handlebars')

app.use(cors())  
dotenv.config();

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})

app.get('/sobre', function (req, res) {
  res.sendFile(__dirname+'/sobre.html')
})

app.get('/110160page', function (req, res) {
  res.sendFile(__dirname+'/110160page.html')
})

app.get('/20770page', function (req, res) {
  res.sendFile(__dirname+'/20770page.html')
})
app.get('/685264page', function (req, res) {
  res.sendFile(__dirname+'/685264page.html')
})
app.get('/65229page', function (req, res) {
  res.sendFile(__dirname+'/65229page.html')
})

app.get('/152532page', function (req, res) {
  res.sendFile(__dirname+'/152532page.html')
})

/// comentarios

app.get('/comments', function (req, res) {
  Comentario.findAll({order:[['id', 'DESC']]}).then(function(comentarios){
      //console.log(comentarios)
      res.render('comments', {Pegarcomentarios: comentarios})
  })
  })
  

app.get('/cad-comments', function (req, res) {
  res.render('cad-comments')})


app.post('/add-comments', function (req, res) {
  //res.send("nome: " + req.body.nome + "<br>comentario"+req.body.comentario)
  Comentario.create({
      nome: req.body.nome,
      comentario: req.body.comentario
  }).then(function(){
      res.redirect('/comments')
      //res.send("Comentario cadastrado com sucesso")
  }).catch(function(){
      res.send("Erro" + error)
  })

})



///
app.listen(8088, ()=>{
  console.log("Servidor iniciando na porta 8088")
})




