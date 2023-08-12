const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//reseta os controles pra os controles de inicio da aplicação 
function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

//A função updateTimerDisplay() é chamada para atualizar o valor exibido na contagem regressiva
function updateTimerDisplay(minutes, seconds) {
  //Completa o numero com um carcter com um "0" na frente 
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

//A função countdown() utiliza a função setTimeout() para agendar a execução de um bloco de código após um atraso de 1000 milissegundos (1 segundo). Isso permite que a contagem regressiva ocorra a cada segundo.
function countdown() {
  timerTimeOut = setTimeout(function () {
    //Para obter o valor atual dos minutos a partir do elemento de exibição correspondente.
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }


    if (seconds <= 0) {
      seconds = 3
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  //Parar o cronometro
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

//botton pra determinar os minutos 
buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?') 
  // o código verifica se newMinutes é falso ou vazio.
  if(!newMinutes){
    // Essa função redefine o temporizador para os minutos iniciais e zera os segundos
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})