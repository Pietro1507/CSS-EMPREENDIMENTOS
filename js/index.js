let url = '../dados/dados.json'
fetch(url)
    .then((resp) => resp.json())
    .then((data) => {

        let imoveis = (data.imoveis)
        imoveis.forEach((imovel) => {
            if (imovel.status === 'Pronta-entrega') {
                let card = document.querySelector('#pronta-entrega')
                card.innerHTML += `<article class = card>
                                <div class = img-card>
                                <img src='${imovel.imagem}'>
                                </div>
                                <div class = content-card>
                                <h1 class= h1-card> ${imovel.nome}</h1>
                                <p class = info-card> ${imovel.localizacao}</p>
                                <span> ${imovel.aptos} | ${imovel.dormitorios} | ${imovel.tamanho}</span>
                                <a href="../html/${imovel.link}" class = button> Ver Mais </a>
                                </div>
                                </article> `}
            else {
                let card = document.querySelector('#vendidos')
                card.innerHTML += `<article class = card>
                                <div class = img-card>
                                <img src='${imovel.imagem}'>
                                </div>
                                <div class = content-card>
                                <h1 class= h1-card> ${imovel.nome}</h1>
                                <p class = info-card> ${imovel.localizacao}</p>
                                <span> ${imovel.aptos} | ${imovel.dormitorios} | ${imovel.tamanho}</span>
                                <a href="../html/${imovel.link}" class = button> Ver Mais </a>
                                </div>
                                </article> `
            }
            let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}





        });
    })

