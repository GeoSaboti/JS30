const secondHand = document.querySelector('.second-hand')
const minsHand   = document.querySelector('.min-hand')
const hourHand   = document.querySelector('.hour-hand')
function setDate () {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + 90
  minsHand.style.transform = `rotate(${minsDegrees}deg)`
  let hour = now.getHours()
  hour = hour % 12 // Get the hour in 12 format am-pm e.g. 20 hours is 8pm
  hour = hour ? hour : 12 // Set hour in 12 if hour is 0
  const hourDegrees = ((hour / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate, 1000)
setDate()
