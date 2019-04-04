window.addEventListener('DOMContentLoaded', (event) => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogsDiv = document.querySelector('#dog-image-container')
const breedUl = document.querySelector('#dog-breeds')
const letterDropdown = document.querySelector('#breed-dropdown')

fetch(imgUrl)
.then(res=> res.json())
.then(dogs => {
  return dogs.message.map(dog => {
    let image = document.createElement('img')
    image.src = dog
    dogsDiv.appendChild(image)
  })
})

fetch(breedUrl)
.then(res => res.json())
.then(breeds => {
  let breedObj = breeds.message

  for(var breed in breedObj){
    createBreedList(breed)
  }

  letterDropdown.addEventListener('change', e => {
    const userSelection = e.target.value
    breedUl.innerHTML = ""
    for(var breed in breedObj){
        if(breed[0] === userSelection){
        createBreedList(breed)
      }
    }
  })
})

  breedUl.addEventListener('click', e => {
    if(e.target.dataset.type === "breed-li"){
      e.target.style.color = "blue"
    }
  })

  function createBreedList(breed) {
    let breedLi = document.createElement('li')
    breedLi.dataset.type = "breed-li"
    breedLi.innerText = breed
    breedUl.appendChild(breedLi)
  }

});
