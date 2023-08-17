export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  //reseta os controles pra os controles de inicio da aplicação 
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {

    let newMinutes = prompt('Quantos minutos?')
    // o código verifica se newMinutes é falso ou vazio.
    if (!newMinutes) {
      // Essa função redefine o temporizador para os minutos iniciais e zera os segundos
      return false
    }
    //Essa linha atualiza o valor da variável minutes com o valor inserido pelo usuário.
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}

