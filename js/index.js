//default import
import resetControls from "./controls.js"
//named import
import { Timer } from "./timer.js"


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

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  //Parar o cronometro
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
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
  if (!newMinutes) {
    // Essa função redefine o temporizador para os minutos iniciais e zera os segundos
    timer.resetTimer()
    return
  }
  //Essa linha atualiza o valor da variável minutes com o valor inserido pelo usuário.
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})