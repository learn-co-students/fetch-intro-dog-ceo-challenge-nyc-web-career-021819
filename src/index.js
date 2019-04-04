document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  //Elements
  const loadBtn = document.querySelector('#loadButton')
  const breedBtn = document.querySelector('#breedButton')
  const dogItem = document.getElementById('dog-breeds')
  const filterInput = document.getElementById('breed-dropdown')
  let breedsArray = []

  //Events
  loadBtn.addEventListener('click', loadImages);
  breedBtn.addEventListener('click', getBreeds);
  dogItem.addEventListener('click', changeItemColor);
  filterInput.addEventListener('change', filterBreeds);

  //Functions
  function loadImages(e) {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res) => {return res.json()})
    .then((dogs) => {
      // debugger
      let output = '<h2> Dogs </h2>'
      dogs.message.forEach((dog) => {
        output += `
        <img src=${dog} height="300" width="300">`
      })
      document.getElementById('dog-image-container').innerHTML = output
    })
  }

  function getBreeds(e) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => {return res.json()})
    .then((breeds) => {
      let output = '<h2> Breeds </h2>'
      breedsArray = Object.keys(breeds.message)
      breedsArray.forEach((breed) => {
        output += `
        <li id="dog-list"> ${breed} </li>
        `
      })
      document.getElementById('dog-breeds').innerHTML = output
    })
  }

  function changeItemColor(e) {
    e.target.style.color = 'blue'
  }

  function filterBreeds(e) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => {return res.json()})
    .then((breeds) => {
      let breedLetter = e.target.value.toLowerCase()
      let output = '<h2> Breeds </h2>'
      breedsArray = Object.keys(breeds.message)
      breedsArray.forEach((breed) => {
        if (breed.slice(0,1) === breedLetter)
          output += `
          <li id="dog-list"> ${breed} </li>
          `
        })
      document.getElementById('dog-breeds').innerHTML = output
    })
  }

});
