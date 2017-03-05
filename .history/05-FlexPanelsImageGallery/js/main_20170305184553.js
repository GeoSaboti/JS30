const panels = document.querySelectorAll('.panel')

function toggleOpen () {
  this.classList.toggle('open')
}

function toggleActive () {
  this.classList
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitioned', toggleActive))
