const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

let cities = []

fetch (endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches (wordToMatch, cities) {
  return cities.filter(place => {
    // Here we need to figure out if the city of state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatches () {
  const matchArray = findMatches(this.value, cities)
  console.log(matchArray)
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
