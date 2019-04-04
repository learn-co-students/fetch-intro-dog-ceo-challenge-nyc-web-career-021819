console.log('%c HI', 'color: firebrick')



document.addEventListener('DOMContentLoaded', function() {
  const dogBreedsUL = document.querySelector("#dog-breeds")
  const breedsUrl = "https://dog.ceo/api/breeds/list/all"
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const image_container = document.querySelector("#dog-image-container")
  const all_lis = document.querySelectorAll('li')
  const breed_dropdown = document.querySelector("#breed-dropdown")
  let images = []
  let breeds = []
  console.log("Dom has loaded")

  fetch(imgUrl)
  .then(function(response) {
    return response.json();
    })
  .then(function(json) {
    images = json.message
    console.log('images =', images)
    console.log(images[0])
    renderImages(images)
    });


  fetch(breedsUrl)
  .then(function(response) {
    return response.json();
    })
  .then(function(json) {
    breeds = Object.keys(json.message)
    console.log('breeds =', Object.keys(breeds), typeof breeds)
    renderListItems(breeds)
    });

  const createlistItem = function (breed) {
    const li = document.createElement("li")
    li.dataset.action = "color-change"
    li.innerText = breed
    return li
  }

  const renderlistItem = function (node) {
    dogBreedsUL.appendChild(node)
  }

  const renderListItems = function (breeds) {
    const all_breeds = breeds.map(createlistItem)
    all_breeds.forEach(renderlistItem)
  }


  const createImageItem = function (image) {
    const img = document.createElement("img")
    img.class = 'dog-image'
    img.src = image
    return img
  }

  const renderImage = function (node) {
    image_container.appendChild(node)
  }

  const renderImages = function (images) {
      // loop images + render
      const all_images = images.map(createImageItem)
      all_images.forEach(renderImage)
  }

  breed_dropdown.addEventListener('change', function (e) {
    e.preventDefault();
    input = breed_dropdown.value
    const filtered_breeds = breeds.filter(function (breed) {
      return breed.startsWith(input)
    })
    dogBreedsUL.innerHTML = ""
      renderListItems(filtered_breeds)
  })


  dogBreedsUL.addEventListener('click', function (e) {
      if (e.target.style.color === "red" && e.target.dataset.action === "color-change") {
        e.target.style.color = "black"
      } else if (e.target.dataset.action === "color-change") {
        e.target.style.color = "red"
      }

      console.log('target = ', e.target.style.color)
  })

})
