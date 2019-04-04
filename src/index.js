console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

  // CHALLENGE 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  function getDogs() {
    fetch(imgUrl)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      const dogImageContainer = document.querySelector("#dog-image-container")
      return json.message.forEach(function(image) {
        let newImageTag = document.createElement('img')
        newImageTag.src = image
        dogImageContainer.appendChild(newImageTag)
      })
    })
  }

  // CHALLENGE 2
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function getBreeds() {
    return fetch(breedUrl)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        const dogBreeds = document.querySelector("#dog-breeds")
        return Object.keys(json.message).forEach(function(breed) {
          let newBreedTag = document.createElement("li")
          newBreedTag.innerText = breed
          dogBreeds.appendChild(newBreedTag)
        })
      })
    }

    function getBreedsByValue(value) {
      return fetch(breedUrl)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          const dogBreeds = document.querySelector("#dog-breeds")
          return Object.keys(json.message).forEach(function(breed) {
            // console.log(breed.charAt(0))
              if (breed.charAt(0) === value) {
                let newBreedTag = document.createElement("li")
                newBreedTag.innerText = breed
                dogBreeds.appendChild(newBreedTag)
            }
          })
        })
      }

  // CHALLENGE 3
  document.querySelector("#dog-breeds").addEventListener('click', function(e) {
    if (e.target.style.color === "lightblue") {
      e.target.style.color = "black"
    }else {
      e.target.style.color = "lightblue"
    }
  })

  // CHALLENGE 4
  document.querySelector('#breed-dropdown').addEventListener('change', function(e) {
    document.querySelectorAll('li').forEach(function(a) {
      a.remove()
    })
    getBreedsByValue(e.target.value)
  })

  getDogs()
  getBreeds()

})
