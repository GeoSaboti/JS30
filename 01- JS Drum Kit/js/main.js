console.log('JS Drum Kit ready!!!')


function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return // Stop the function from runnig all together
  audio.currentTime = 0 // Rewind to the start
  audio.play()
  key.classList.add('playing')
}

function removeTransition (e) {
  if (e.propertyName !== 'transform') return // Skip it if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

// Attach even listener for each element of the array
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)

