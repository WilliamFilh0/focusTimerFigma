//default import
import Controls from "./controls.js"
//named import
import Timer from "./timer.js"
import Sound from "./sounds.js"
import { 
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop, 
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js"



const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  
})

const sound = Sound()

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
})

//botton pra determinar os minutos 
buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  // o código verifica se newMinutes é falso ou vazio.
  if (!newMinutes) {
    // Essa função redefine o temporizador para os minutos iniciais e zera os segundos
    timer.reset()
    return
  }
  //Essa linha atualiza o valor da variável minutes com o valor inserido pelo usuário.
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
