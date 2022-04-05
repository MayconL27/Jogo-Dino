
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
alert('iniciar')
function pular() {
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
    
}

