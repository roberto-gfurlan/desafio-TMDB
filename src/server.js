
const cors = require('cors')
const dotenv = require('dotenv');
const express = require('express')
const axios = require('axios')
const app = express()

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




app.use("/static", express.static('./static/'));
app.listen('4567')




