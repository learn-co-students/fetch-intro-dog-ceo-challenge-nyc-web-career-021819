document.addEventListener('DOMContentLoaded', () => {
  let breedData = []

  const requestURLs = async () => {
    let response = await fetch('https://dog.ceo/api/breeds/image/random/4')
	  let dogData = await response.json()
	  dogData.message.forEach(dog => makeADog(dog))
  }

  requestURLs()

  const dogImageContainer = document.getElementById('dog-image-container')

  function makeADog(dogUrl) {
    const dogImage = document.createElement('img')
    dogImage.src = dogUrl
    dogImageContainer.appendChild(dogImage)
  }

  const requestBreeds = async () => {
    let response = await fetch('https://dog.ceo/api/breeds/list/all')
    breedData = await response.json()
    Object.keys(breedData.message).forEach(breed => makeABreed(breed))
  }

  requestBreeds()

  const dogBreedsUL = document.getElementById('dog-breeds')

  function makeABreed(breed) {
    const breedLI = document.createElement('li')
    breedLI.innerText = breed
    dogBreedsUL.appendChild(breedLI)
  }


  dogBreedsUL.addEventListener('click', event => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "pink"
    }
  })

  const breedDropdown = document.getElementById('breed-dropdown')

  breedDropdown.addEventListener('input', event => {
    clearInner(dogBreedsUL);
    const selectedValue = event.target.value
    let filteredBreedData = Object.keys(breedData.message).filter(breed => breed[0] === selectedValue)

    if (selectedValue === "Please choose a letter"){
      Object.keys(breedData.message).forEach(breed => makeABreed(breed))
    } else {
      filteredBreedData.forEach(breed => makeABreed(breed))
    }
  })

  function clearInner(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
  }

  function clear(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
  }

})










// document.addEventListener('DOMContentLoaded', () => {
//   fetchDogs()
//   fetchBreeds()
//
// })
//
// function fetchDogs() {
//   fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(response => response.json())
//     .then(json => renderDogs(json))
// }
//
// function renderDogs(json) {
//   const dogImageContainer = document.getElementById('dog-image-container')
//   json.message.forEach(dog => {
//     const img = document.createElement('img')
//     img.src = dog
//     dogImageContainer.appendChild(img)
//   })
// }
//
// function fetchBreeds() {
//   fetch('https://dog.ceo/api/breeds/list/all')
//     .then(response => response.json())
//     .then(json => renderBreeds(json))
// }
//
// function renderBreeds(json) {
//   const breeds = document.getElementById('dog-breeds')
//   Object.keys(json.message).forEach(breed => {
//     const li = document.createElement('li')
//     li.innerText = breed
//     breeds.appendChild(li)
//   })
// }
