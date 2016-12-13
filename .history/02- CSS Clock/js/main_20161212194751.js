function setDate () {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60 )
  console.log(seconds)
}

setInterval(setDate, 1000)
