const pegarDivTotal = document.getElementById("card-content")

async function LaurencePage(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const pegarDados = "https://api.themoviedb.org/3/movie/110160?api_key="+ apiKey + "&language=en-US"


     await fetch(pegarDados)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        let res = data
        console.log(res)
              if(data)  {
                let criarFigure = document.createElement("figure") 
                let criarImagem = document.createElement("img")
                let criarCardText = document.createElement("div")
                let criarTitulo = document.createElement("h1")
                let criarTagline = document.createElement("h3")
                let criarPop = document.createElement("h5")
                let criarIdioma = document.createElement("h5")
                let criarLancamento = document.createElement("h5")
                let criarTrailer = document.createElement("div")

                criarImagem.src = "https://image.tmdb.org/t/p/w400" + res.poster_path
                criarTitulo.innerHTML = res.original_title
                criarTagline.innerHTML = res.tagline
                criarPop.innerHTML = "popularidade: " + res.popularity
                criarIdioma.innerHTML = "idioma: " + res.original_language
                criarLancamento.innerHTML = "lançamento: " + res.release_date
                criarTrailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UXH6hVfz9j4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                

                criarFigure.className = 'testeclass'
                criarCardText.className = 'card-pages-text'
                criarTitulo.className = 'pages-titulo'
                criarTrailer.className = 'trailer'


                criarFigure.appendChild(criarImagem)
                pegarDivTotal.appendChild(criarFigure)
                pegarDivTotal.appendChild(criarCardText)
                criarCardText.appendChild(criarTitulo)
                criarCardText.appendChild(criarTagline)
                criarCardText.appendChild(criarPop)
                criarCardText.appendChild(criarIdioma)
                criarCardText.appendChild(criarLancamento)
                criarCardText.appendChild(criarTrailer)
                
                
              }          
        })

}


//////////// But I Am Cheerleader


async function ButCheerleader(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const pegarDados = "https://api.themoviedb.org/3/movie/20770?api_key="+ apiKey + "&language=en-US"


     await fetch(pegarDados)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        let res = data
        console.log(res)
              if(data)  {
                let criarFigure = document.createElement("figure") 
                let criarImagem = document.createElement("img")
                let criarCardText = document.createElement("div")
                let criarTitulo = document.createElement("h1")
                let criarTagline = document.createElement("h3")
                let criarPop = document.createElement("h5")
                let criarIdioma = document.createElement("h5")
                let criarLancamento = document.createElement("h5")
                let criarTrailer = document.createElement("div")

                criarImagem.src = "https://image.tmdb.org/t/p/w400" + res.poster_path
                criarTitulo.innerHTML = res.original_title
                criarTagline.innerHTML = res.tagline
                criarPop.innerHTML = "popularidade: " + res.popularity
                criarIdioma.innerHTML = "idioma: " + res.original_language
                criarLancamento.innerHTML = "lançamento: " + res.release_date
                criarTrailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/HnUvneNxoz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                

                criarFigure.className = 'testeclass'
                criarCardText.className = 'card-pages-text'
                criarTitulo.className = 'pages-titulo'
                criarTrailer.className = 'trailer'


                criarFigure.appendChild(criarImagem)
                pegarDivTotal.appendChild(criarFigure)
                pegarDivTotal.appendChild(criarCardText)
                criarCardText.appendChild(criarTitulo)
                criarCardText.appendChild(criarTagline)
                criarCardText.appendChild(criarPop)
                criarCardText.appendChild(criarIdioma)
                criarCardText.appendChild(criarLancamento)
                criarCardText.appendChild(criarTrailer)
                
                
              }          
        })

}


///////////////// Pray Away 685264


async function PrayAway(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const pegarDados = "https://api.themoviedb.org/3/movie/685264?api_key="+ apiKey + "&language=en-US"


     await fetch(pegarDados)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        let res = data
        console.log(res)
              if(data)  {
                let criarFigure = document.createElement("figure") 
                let criarImagem = document.createElement("img")
                let criarCardText = document.createElement("div")
                let criarTitulo = document.createElement("h1")
                let criarTagline = document.createElement("h3")
                let criarPop = document.createElement("h5")
                let criarIdioma = document.createElement("h5")
                let criarLancamento = document.createElement("h5")
                let criarTrailer = document.createElement("div")

                criarImagem.src = "https://image.tmdb.org/t/p/w400" + res.poster_path
                criarTitulo.innerHTML = res.original_title
                criarTagline.innerHTML = res.tagline
                criarPop.innerHTML = "popularidade: " + res.popularity
                criarIdioma.innerHTML = "idioma: " + res.original_language
                criarLancamento.innerHTML = "lançamento: " + res.release_date
                criarTrailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tk_CqGVfxEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                

                criarFigure.className = 'testeclass'
                criarCardText.className = 'card-pages-text'
                criarTitulo.className = 'pages-titulo'
                criarTrailer.className = 'trailer'


                criarFigure.appendChild(criarImagem)
                pegarDivTotal.appendChild(criarFigure)
                pegarDivTotal.appendChild(criarCardText)
                criarCardText.appendChild(criarTitulo)
                criarCardText.appendChild(criarTagline)
                criarCardText.appendChild(criarPop)
                criarCardText.appendChild(criarIdioma)
                criarCardText.appendChild(criarLancamento)
                criarCardText.appendChild(criarTrailer)
                
                
              }          
        })

}



///////////////// Tomboy 65229


async function TomBoy(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const pegarDados = "https://api.themoviedb.org/3/movie/65229?api_key="+ apiKey + "&language=en-US"


     await fetch(pegarDados)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        let res = data
        console.log(res)
              if(data)  {
                let criarFigure = document.createElement("figure") 
                let criarImagem = document.createElement("img")
                let criarCardText = document.createElement("div")
                let criarTitulo = document.createElement("h1")
                let criarTagline = document.createElement("h3")
                let criarPop = document.createElement("h5")
                let criarIdioma = document.createElement("h5")
                let criarLancamento = document.createElement("h5")
                let criarTrailer = document.createElement("div")

                criarImagem.src = "https://image.tmdb.org/t/p/w400" + res.poster_path
                criarTitulo.innerHTML = res.original_title
                criarTagline.innerHTML = res.tagline
                criarPop.innerHTML = "popularidade: " + res.popularity
                criarIdioma.innerHTML = "idioma: " + res.original_language
                criarLancamento.innerHTML = "lançamento: " + res.release_date
                criarTrailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RYLP48Uj4iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                

                criarFigure.className = 'testeclass'
                criarCardText.className = 'card-pages-text'
                criarTitulo.className = 'pages-titulo'
                criarTrailer.className = 'trailer'


                criarFigure.appendChild(criarImagem)
                pegarDivTotal.appendChild(criarFigure)
                pegarDivTotal.appendChild(criarCardText)
                criarCardText.appendChild(criarTitulo)
                criarCardText.appendChild(criarTagline)
                criarCardText.appendChild(criarPop)
                criarCardText.appendChild(criarIdioma)
                criarCardText.appendChild(criarLancamento)
                criarCardText.appendChild(criarTrailer)
                
                
              }          
        })

}



///////////////// Dallas Buyers Club 152532


async function Dallas(){
    const apiKey = "1bc41798a62df7a63e79daa9f7a1c80c"
    const pegarDados = "https://api.themoviedb.org/3/movie/152532?api_key="+ apiKey + "&language=en-US"


     await fetch(pegarDados)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        let res = data
        console.log(res)
              if(data)  {
                let criarFigure = document.createElement("figure") 
                let criarImagem = document.createElement("img")
                let criarCardText = document.createElement("div")
                let criarTitulo = document.createElement("h1")
                let criarTagline = document.createElement("h3")
                let criarPop = document.createElement("h5")
                let criarIdioma = document.createElement("h5")
                let criarLancamento = document.createElement("h5")
                let criarTrailer = document.createElement("div")

                criarImagem.src = "https://image.tmdb.org/t/p/w400" + res.poster_path
                criarTitulo.innerHTML = res.original_title
                criarTagline.innerHTML = res.tagline
                criarPop.innerHTML = "popularidade: " + res.popularity
                criarIdioma.innerHTML = "idioma: " + res.original_language
                criarLancamento.innerHTML = "lançamento: " + res.release_date
                criarTrailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tb5-PT78v-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                

                criarFigure.className = 'testeclass'
                criarCardText.className = 'card-pages-text'
                criarTitulo.className = 'pages-titulo'
                criarTrailer.className = 'trailer'


                criarFigure.appendChild(criarImagem)
                pegarDivTotal.appendChild(criarFigure)
                pegarDivTotal.appendChild(criarCardText)
                criarCardText.appendChild(criarTitulo)
                criarCardText.appendChild(criarTagline)
                criarCardText.appendChild(criarPop)
                criarCardText.appendChild(criarIdioma)
                criarCardText.appendChild(criarLancamento)
                criarCardText.appendChild(criarTrailer)
                
                
              }          
        })

}