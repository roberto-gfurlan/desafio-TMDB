

async function loadComments(){
  
    const response = await fetch('http://localhost:4567/comentarios')
    const data = await response.json()
    
    //console.log(data)
    exibirComentarios(data)
}

async function pegarComentarioFeito(){
  
    const response = await fetch('http://localhost:4567/insert')
    const data = await response.json()
    
    console.log(data)
    //exibirComentarios(data)
}



function exibirComentarios(data){
    let res = data
    //console.log(res)
    res.forEach(comment => {
        let node = document.createElement("div");
        let name = document.createElement("h5");
        let date = document.createElement("h6");
        let message = document.createElement("p");

        node.className = 'card-body';
        name.className = 'card-title';
        date.className = 'card-subtitle text-muted';

        let textName = document.createTextNode('Nome: ' + comment.nome);
        let textDate = document.createTextNode('Data: ' +comment.data);
        let textMessage = document.createTextNode(comment.comentario);

        name.appendChild(textName);
        date.appendChild(textDate);
        message.appendChild(textMessage);

        node.appendChild(name);
        node.appendChild(date);
        node.appendChild(message);

        document.getElementById('comments').appendChild(node);

    });

}


function pegarDados(){

    let nome = document.getElementById('name').value
    let comentario = document.getElementById('message').value

    const insertComment = {
        nome: `${nome}`,
        comentario: `${comentario}`
    }
    return insertComment
}


module.exports = { pegarDados}






////

