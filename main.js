// variáveis 
const randomNumber = Math.round(Math.random() * 10) // para ter um número randômico guardado na memória assim que a aplicação começar
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1 // variável de controle

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// Funções
/* função callback - toda vez que clicar no botão, vai pegar o número de tentativas e somar ++ 
obs. só vou mudar a tela quando o resultado for igual */
function handleTryClick(event){
  event.preventDefault() // quer dizer pra não executar o evento padrão de um botão, que é enviar um formulário, nesse caso. 
  const inputNumber = document.querySelector("#inputNumber")

  // transformando o input em um número; se o número for igual ao random, vai tirar a classe hide pra aparecer a outra "tela"
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen() 
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas.`
  }
  inputNumber.value = "" // toda vez que clicar no botão de tentar, o input vai limpar o número que foi digitado nele.
  xAttempts++
}

function handleResetClick(){
  toggleScreen() 
  xAttempts = 1
}

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
// Pra funcionar quando apertar a tecla enter e não só no click do mouse 
document.addEventListener('keydown', function(e){
  if (e.key == 'Enter'){
    handleResetClick()
  }
})