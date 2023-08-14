//reseta os controles pra os controles de inicio da aplicação 
function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

//defauld export
export default resetControls