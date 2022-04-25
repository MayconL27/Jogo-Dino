
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

