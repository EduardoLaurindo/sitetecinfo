var banners =
["os melhores do Brasil", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContect =  banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
