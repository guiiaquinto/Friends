let epFriends = require("./base")

function gerar() {
    var nEpisodio = Math.floor(Math.random() * epFriends.length);
    var eps = document.querySelector('div#res');
    eps.innerHTML = `<p>O episódio que você tem que assistir é <strong>${nEpisodio} </strong></p>`
}

/*function gerar(){
    let nEpisodio = Math.floor(Math.random() * epFriends.length);
    let lista = document.getElementById('div#res');
    for(var i = 0; i < nEpisodio.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(nEpisodio[i]));
        lista.appendChild(item);
    }
}*/


