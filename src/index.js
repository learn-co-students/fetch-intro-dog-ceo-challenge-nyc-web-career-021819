console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  //fetch images from the url
  //parse the response as `JSON`
  //add image elements to the DOM **for each** image in the array

fetch (imgUrl)
  .then(function(response) {       //.then(response => response.json())
    return response.json()
  })
  .then(function(json){
    const dogs = json.message
    dogs.forEach(function(dog) {
      const picture = document.createElement("img")
      picture.src = dog
      document.querySelector('#dog-image-container').appendChild(picture)
    })
  })

//on page load, fetch all the dog breeds using the url
//add the breeds to the page in an <ul>
//Once all of the breeds are rendered in the <ul>, add javascript so that the font color of a particular <li> changes on click.

fetch (breedUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    const breeds = json.message
    const keys = Object.keys(breeds)
    keys.forEach(function(breed) {
      const ul = document.querySelector('#dog-breeds')
      const li = document.createElement("li")
      ul.append(li)
      li.innerText = breed
        li.addEventListener("click", function() {
          li.style.color = "red"
      })
    })
  })

// user can filter breeds that start with a particular letter using a dropdown.
//get the value from the dropdown menu
const dropdown = document.querySelector("#breed-dropdown")
  dropdown.addEventListener("change", function(e) {
    const input = e.target.value
    //get the entire list of breeds
    const listOfBreeds = document.querySelectorAll("li")

    //match that value with the list of breeds
    //display all matched breeds
    listOfBreeds.forEach(function(li) {
      if (li.innerText[0] === input) {
        return li.style.display = "list-item"
      } else {
        return li.style.display = "none"
      }
    })
  })






});
