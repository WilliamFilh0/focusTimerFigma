
export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls }) {

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

  return {
    countdown,
    resetTimer
  }
}
