function gerar() {
    var nEpisodio = episodios[Math.floor(Math.random() * episodios.length)];
    (episodios.length)
    var eps = document.querySelector('h2#res');
    eps.innerHTML = `<p>O episódio que você tem que assistir é da <strong>${nEpisodio.temporada}º Temporada, episódio ${nEpisodio.episodio}, ${nEpisodio.nome}</strong></p>`
}


