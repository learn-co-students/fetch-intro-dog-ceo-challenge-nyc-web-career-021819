// console.log('%c HI', 'color: green')

document.addEventListener('DOMContentLoaded', ev => {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const response = function (res) {
    return res.json()
  }
  const dogContainer = document.querySelector('#dog-image-container')
  const breedTag = document.querySelector('#dog-breeds')
  const breedDropdown = document.querySelector('#breed-dropdown')
  fetch(imgUrl)
  .then(response)
  .then(function (myJson) {
      myJson.message.map((image) => {
          let liEl = document.createElement('img')
          liEl.src = `${image}`
          dogContainer.appendChild(liEl)
        })
    })
    fetch(breedUrl)
    .then(response)
    .then(function (myJson) {
        const breedList = Object.keys(myJson.message)
        breedList.map(function (breed) {
            let breedEl = document.createElement('li')
            breedEl.innerText = `${breed}`
            breedTag.appendChild(breedEl)
        })
    })
    breedTag.addEventListener('click', ev => {
        const clickedBreed = ev.target
        clickedBreed.style.color = 'red'
    })

    breedDropdown.addEventListener('change', ev => {
        const input = ev.target.value
        console.log(input)
        const breedList = document.querySelectorAll('li')
        breedList.forEach(breed => {
            console.log(breed)
            if (breed.innerText[0] === input) {
            return breed.style.display = `li`;
            }else {
            return breed.style.display = 'none';
            }
        });
    })
    
})
// eventlistener end
