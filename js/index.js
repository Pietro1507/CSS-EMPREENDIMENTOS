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
                                <span class = "num-card"> ${imovel.aptos} | ${imovel.dormitorios} | ${imovel.tamanho}</span>
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
                                <span class= "num-card"> ${imovel.aptos} | ${imovel.dormitorios} | ${imovel.tamanho}</span>
                                <a href="../html/${imovel.link}" class = button> Ver Mais </a>
                                </div>
                                </article> `
            }
        
            let slides = document.querySelectorAll('.slide-container');
            let index = 0;
            
            function next(){
                slides[index].classList.remove('active');
                index = (index + 1) % slides.length;
                slides[index].classList.add('active');
            }
            
            function prev(){
                slides[index].classList.remove('active');
                index = (index - 1 + slides.length) % slides.length;
                slides[index].classList.add('active');
            }
            document.querySelector('#prev').addEventListener('click', prev)
            document.querySelector('#next').addEventListener('click', next)
            
            setInterval(next, 10000);

            let btnSanduiche = document.querySelector('.btn-sanduiche')
            btnSanduiche.addEventListener('click', () => {               
                let logo = document.querySelector('.logo')
                let menuMobile = document.querySelector('.menu-mobile')
                menuMobile.classList.toggle('ativo')
                if(menuMobile.classList.contains('ativo')){
                    logo.style.display = 'none'
                    btnSanduiche.src = '../img/fechar.png'
                }
                else{
                    logo.style.display = 'block'
                    btnSanduiche.src = '../img/pngegg.png'
                }
            })
            




        });
    })

