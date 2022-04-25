
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

alert('iniciar')



function pular() {
    // Adicionar classe .animar
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    // Pausar pulo
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
    
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)