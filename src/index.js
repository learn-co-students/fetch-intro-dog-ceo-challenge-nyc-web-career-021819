console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogImageContainer = document.querySelector("#dog-image-container")
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogBreeds = document.querySelector("#dog-breeds")
    let filter = document.querySelector('#breed-dropdown')
    const letters = []

    // Geting 4 Random Dogs
    fetch(imgUrl)
    .then(function(res) {
        return res.json()
    })
    .then(function(images) {
        const allDogs = images.message.map(function(image) {
            return image
        })
        renderImages(allDogs)
    })

    // Get all breeds
    fetch(breedUrl)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        breedsObject = data.message
        // console.log(breedsObject)
        renderBreeds(Object.keys(breedsObject))
    })

    const createDogItem = function(dog) {
        const div = document.createElement('div')
        div.className = 'dog'
        div.innerHTML = `<img src="${dog}"/>`
        return div
    }

    const renderImages = function(images) {
        dogImageContainer.innerHTML = ``
        const dogListItems = images.map(createDogItem)
        dogListItems.forEach(renderDogItem)
    }

    const renderDogItem = function(dogNode) {
        dogImageContainer.append(dogNode)
    }

    const renderBreeds = function(breeds) {
        const breedItems = breeds.map(createBreedItem)
        breedItems.forEach(renderBreedItem)
    }

    const createBreedItem = function(breed) {
        // console.log(breed)
        // key = Object.keys(breed)[0]
        // value = breed[Object.keys(breed)[0]]
        const li = document.createElement('li')
        li.innerText = breed
        li.dataset.action = "colorChange"
        // console.log(breed[0])

        filter = document.querySelector('#breed-dropdown')
        const option = document.createElement('option')
        option.value = breed[0]
        option.innerText = breed[0]
        
        console.log(letters)
        if (!letters.includes(breed[0])){
            filter.appendChild(option)
            letters.push(breed[0])
        }

        // filter.appendChild(option)
        
        const allOptions = filter.querySelectorAll('option')
        // console.log(allOptions.length)

        return li
    }

    const renderBreedItem = function(breedNode){
        dogBreeds.append(breedNode)
    }

    dogBreeds.addEventListener("click", function(e) {
        if (e.target.dataset.action === "colorChange") {
            e.target.style.color = "blue"
        }
    })

    filter.addEventListener("change", function(e) {
        userInput = e.target.value
        allBreeds = document.querySelectorAll('li')

        allBreeds.forEach(function(breed){
            breed.style.display = ""
            if (breed.innerText[0] !== userInput) {
                breed.style.display = "none"
            }
        })
        
    })
})
