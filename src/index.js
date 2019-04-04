


document.addEventListener('DOMContentLoaded', ev => {
  dogImageContainer = document.getElementById("dog-image-container")
  dogBreedsUl = document.getElementById("dog-breeds")
  breedFilter = document.getElementById("breed-dropdown")
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
    return response.json();
  })
.then(function(json){
    json.message.forEach(function(image){
      let newImage = document.createElement('img');
      let li = document.createElement('li');
       newImage.src = `${image}`
       li.appendChild(newImage);
       dogImageContainer.appendChild(li);
    })
  })

 fetch("https://dog.ceo/api/breeds/list/all")
 .then(function(response) {
   return response.json();
 })
 .then(function(json) {
     breedKeys = Object.keys(json.message)
     breedKeys.forEach(function(breed){
       let li = document.createElement('li');
       li.dataset.action = "colorChange"
       li.innerText = breed;
       dogBreedsUl.appendChild(li)
     })


   dogBreedsUl.addEventListener('click', function(ev) {
     function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      if (ev.target.dataset.action === "colorChange") {
         ev.target.style.color = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
     }
   })

   breedFilter.addEventListener('input', function(ev){
       function filterFunction (array) {
        return array.filter(function (element) {
          return element[0] === breedFilter.value
        })
       }
      filteredBreeds = filterFunction(breedKeys)
      dogBreedsUl.innerHTML = ''
      filteredBreeds.forEach(function(breed){
        let li = document.createElement('li');
        li.dataset.action = "colorChange"
        li.innerText = breed;
        dogBreedsUl.appendChild(li)
      })

   })
 })
})
