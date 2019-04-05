console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    // let for all dog breeds to avoid multiple fetches for data
    let allBreeds = []

    // api endpoints
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    // dom nodes 
    const dogImgContainer = document.getElementById('dog-image-container')
    const dogBreedUl = document.getElementById('dog-breeds')
    const breedDropdown = document.getElementById('breed-dropdown')

    // listeners
    dogBreedUl.addEventListener('click', function(event) {
      event.target.style.color = 'cyan'
    })

    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value 
        // filter out the dogs whose names don't match the selected letter
        const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter))
        
        dogBreedUl.innerHTML = createDogLis(filteredBreeds)
    })
    // fetches
    fetch(imgUrl)
        // returns a promise with a response object inside of it
        .then((response) => {
            console.log(response)
            // .then takes a callback and passes the return val from the previous promise to it
                return response.json() //return the parsed json as a promise
        })
        .then((dogImgData) => {
            console.log(dogImgData) //parsed data from our previous .then
            dogImgData.message.forEach(function(imgUrl) {
              dogImgContainer.innerHTML += `<img src="${imgUrl}">`
            })
            const dogImgString = dogImgData.message.map((imgUrl) => {
              return `<img src="${imgUrl}">`
            })
            
            dogImgContainer.innerHTML = dogImgString.join('')
        })


    fetch(breedUrl)
        .then((resp) => resp.json())
        // the return value is our parsed json; the breedData object
        .then((breedData) => {
            // breedData is an object whose keys are the breed names
            allBreeds = Object.keys(breedData.message) 
            console.log(allBreeds) 
            dogBreedUl.innerHTML = createDogLis(allBreeds) 
        })
})

//helper fn
function createDogLis(dogBreedArray) {
    const dogLiStringArray = dogBreedArray.map(function (breed) {
        return `<li>${breed}</li>`
    })
    // kill the commas
    return dogLiStringArray.join('')
}