const newReleaseContent = document.getElementById("minhalista-content")


async function pegarConteudoServidor(){

        try {
            const resposta = await fetch ('http://localhost:4567')
            const respostaJson = await resposta.json()            

            //console.log(respostaJson)
            //mostrar(respostaJson)
        
        } catch (error) {
        console.error(error)  
        }
        }

//pegarConteudoServidor()


async function lancamentosTmdb(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const lancamentosUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key="+ apiKey + "&language=en-US&page=1"
    await fetch(lancamentosUrl)
    .then( response =>{
        return response.json()      
    })
    .then(data =>{
        let res = data.results
        console.log(res)
        })
    //console.log(resposta)
        
}

//lancamentosTmdb()


async function listaTmdb(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const listaUrl = "https://api.themoviedb.org/4/list/7107496?page=1&api_key="+ apiKey + "&sort_by=title.asc&language=en-US"

 
     await fetch(listaUrl)
    .then( response =>{
        return response.json()      
    })
    .then(data =>{
        let res = data.results
        console.log(res)
        for(var i = 0; i < 10; i++){
            let newReleaseMovie = document.createElement("div")
            let newMovieTitle = document.createElement("h5")
            let newMovieImg = document.createElement("img")

            // dar classe aos elementos criados
            newReleaseMovie.className = 'movie'
            newMovieTitle.className = 'movie-title'
            newMovieImg.className = 'movie-img'

            // colocar titulo
            newMovieTitle.innerHTML = res[i].original_title

            //colocar imagem
            newMovieImg.src = "https://image.tmdb.org/t/p/w200" + res[i].poster_path

            //append no html
            newReleaseMovie.appendChild(newMovieImg)
            newReleaseMovie.appendChild(newMovieTitle)
            newReleaseContent.appendChild(newReleaseMovie)

        }
        })
    .catch(err => {
        console.log(err)
    })
        
}

listaTmdb()