
const {databaseConnection} = require ('./connection')
const {pegarDados} = require('../../static/comentarios')

const comentarios = {}

async function mostrarTodosComentarios(){
    const querySelectComentarios = `SELECT * FROM banco_comentarios.comentarios`
    const result = await databaseConnection.raw(querySelectComentarios)
    return result [0]
    
}

////



async function inserirComentario(comment){

    const insertComment = pegarDados()
    console.log(insertComment)
    const result = await databaseConnection('comentarios').insert(insertComment)

    if(result){
        return{ 
            //nome: pokemon.nome,
            //tipo: pokemon.tipo,
            //origem:pokemon.origem,
            ...comment,
            id: result[0]
        }
    }else{
        console.error("Deu erro!")
        return{
            error: "Deu erro na inserção"
        }
    }
}


module.exports = { mostrarTodosComentarios, inserirComentario }