// Declaração Variáveis
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if(nivel === 'normal'){
    //1500ms
    criaMosquitoTempo = 1500
} else if(nivel ==='dificil'){
    //1000ms
    criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris') {
    //750ms
    criaMosquitoTempo = 750
}

// Função para ajustar os valores de tamanho de tela automático
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)


function posicaoRandomica() {
    //remover mosca já existente, caso exista
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else{

            document.getElementById('v' + vidas).src="./imagens/imagens/coracao_vazio.png"
        vidas++
        }
        
    }
    


    // Gerar valor aleatório para spawn, com base no tamanho da tela do usuário
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // Controle para valor da posição não ser menor de 0. (Caso seja, o elemento some)
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    // Criar o elemento HTML
    var mosca = document.createElement('img')
    mosca.src = './imagens/imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }


    document.body.appendChild(mosca)

    

}


// Função para randomizar o tamanho da mosca, associando à uma classe css com tamanhos pré-definidos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}


// Função para randomizar o lado de aparição da mosca
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}


// Função de escolha de Nível
function iniciarJogo() {
   var nivel = (document.getElementById('nivel').value)

   if(nivel === '') {
    alert('Selecione um nível para iniciar o jogo')
    return false
   } 

   window.location.href = 'app.html?' + nivel
}
