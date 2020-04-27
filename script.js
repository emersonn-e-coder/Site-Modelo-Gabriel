/*ban = new Array(3);
ban[0]= "imagens/paper25.png";
ban[1]= "imagens/paper15.png";
ban[2]= "imagens/paper35.png";
var contador = 0;
var timer = 5000;

function banner(){
    contador++;
    contador = contador % 3;
    document.banner.src = ban[contador];
    setTimeout("banner()",timer);
}

let imagem = document. querySelector('. banner')
imagem.style.opacity = '100%'*/



function mudaImagem(){
    let imagem35 = document.querySelector('.img-35')
    let imagem15 = document.querySelector('.img-15')
    let imagem25 = document.querySelector('.img-25')

    imagem35.animate([
       {opacity:'0%'}, 
       {opacity:'100%'}
    ],
    {
        duration:1000,
        fill:'backwards'
    })

    imagem15.animate([
        {opacity:'0%'},
        {opacity:'100%'}
    ],
    {
        duration:1000,
        fill:'backwards',
        delay:2000
    })
    imagem25.animate([
        {opacity:'0%'},
        {opacity:'100%'}
    ],
    {
        duration:2000,
        fill:'backwards',
        delay:4000
    })
}
setInterval(mudaImagem,8000)



