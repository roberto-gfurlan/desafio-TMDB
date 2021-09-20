
const newReleaseContent = document.getElementById("card-content")

async function ChamarServidor(){
  
     const data = await axios(`https://api.themoviedb.org/4/list/7107496?api_key=1bc41798a62df7a63e79daa9f7a1c80c&language=en-US&page=1&include_adult=false`) 
     .then((response) => {
        //console.log(response.data)
        const dataApi = response.data
        //console.log(dataApi)
        exibirHome(dataApi)
            

      })

 }
ChamarServidor()

 function exibirHome(data){
    let res = data.results
    //console.log(res)
    for(var i = 0; i < 10; i++){
        let novoCard = document.createElement("div")
        let pontuacao = document.createElement("h4")
        let novoCardImg = document.createElement("div")
        let novaImg = document.createElement("img")
        let novaImgBlur = document.createElement("img")
        let novoCardText = document.createElement("div")
        let novoCardTitulo = document.createElement("h2")
        let novoResumo = document.createElement("p")
        let linkPageFilme = document.createElement('a')
        

        // dar classe aos elementos criados
        novoCard.className = 'card'
        novoCardImg.className = 'card-img'
        novoCardText.className = 'card-text'
        novoCardTitulo.className = 'movie-title'
        novaImg.className = 'movie-img'
        novaImgBlur.className = 'blur'

        // colocar titulo
        novoCardTitulo.innerHTML = res[i].original_title

        //colocar imagem
        novaImg.src = "https://image.tmdb.org/t/p/w200" + res[i].poster_path
        novaImgBlur.src = "https://image.tmdb.org/t/p/w200" + res[i].poster_path

        // colocar pontuacao
        pontuacao.innerHTML = res[i].vote_average

        // colocar sinopse
        novoResumo.innerHTML = res[i].overview, 100

        //colocar link para pagina do filme
        linkPageFilme.href = res[i].id+"page"

        //append no html
        
        novoCard.appendChild(pontuacao)
        novoCard.appendChild(novoCardImg)
        novoCardImg.appendChild(novaImg)
        novoCardImg.appendChild(novaImgBlur)
        novoCardText.appendChild(novoCardTitulo)
        novoCardText.appendChild(novoResumo)
        novoCard.appendChild(novoCardTitulo)
        novoCard.appendChild(novoCardText)
            
        newReleaseContent.appendChild(linkPageFilme)
        linkPageFilme.appendChild(novoCard)

       
    }
    }

   