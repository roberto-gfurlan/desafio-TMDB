
const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())  

app.get('/', async(req, res) => {

    // const response = await axios('https://jsonplaceholder.typicode.com/users') 
    // response.data já é o dado em JSON
    
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const {data} = await axios(`https://api.themoviedb.org/3/list/7107496?api_key=${apiKey}&language=en-US&page=1&include_adult=false`) 
    //console.log(data)

  return res.json(data)
}) 




/* app.get('/', (req, res) => {
  return res.json([
    {name: 'Roberto'},
    {name: 'Paula'}
  ])
}) */

app.use("/static", express.static('./static/'));
app.listen('4567')




