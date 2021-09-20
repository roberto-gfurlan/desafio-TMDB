

async function loadComments(){
  
    const response = await fetch('http://localhost:4567/comentarios')
    const data = await response.json()
    
    //console.log(data)
    exibirComentarios(data)
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
    let inputNome = document.getElementById("name").value;
    let inputMensagem = document.getElementById('message').value
    
    fetch("http://localhost:5500/comentarios.html", {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify({
          nome: inputNome,
          comentario: inputMensagem,
       
       })
    })
    

}


/* function insertComent(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        }
    }
    let inputNome = document.getElementById("name").value;
    let inputMensagem = document.getElementById('message').value

    xhttp.open("POST", '/insert', true)
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send('{"nome":"'+inputNome+'","comentario":"'+inputMensagem+'" }')

}  */




////

