
let dino = document.querySelector('#dino')
let cacto = document.querySelector('#cacto')
var res = document.querySelector('div#res')

function pular() {
    // Adicionar classe .animar
    if(dino.classList != 'animar'){
        dino.classList.add('animar')
    }
    // Pausar pulo
    setTimeout(function(){
        dino.classList.remove('animar')
    }, 500)
    
}
var testarColisao = setInterval( function(){

    var topoDino = parseInt(
     window.getComputedStyle(dino).getPropertyValue('top')
    )
    var EsquerdaCacto = parseInt(
        window.getComputedStyle(cacto).getPropertyValue('left')
       )

       if(EsquerdaCacto < 20 && EsquerdaCacto > 0 && topoDino >= 130){
        cacto.style.animation = 'none'
        cacto.style.display = 'none'
        alert('Você perdeu!')
        res.innerHTML = 'Fim de jogo <br> Aperte F5 para reiniciar'
    }
    

}, 10)