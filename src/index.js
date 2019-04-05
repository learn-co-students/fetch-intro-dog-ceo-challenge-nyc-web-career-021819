function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(json => json.message.forEach(function(dog){
           let main = document.querySelector('#dog-image-container')
           let img = document.createElement("img")
           img.src = dog
           main.appendChild(img)
        })
    );
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(json => Object.keys(json.message).forEach(function(dog){
            let main = document.querySelector('#dog-breeds')
            let breed = document.createElement("li")
            breed.innerText = dog
            let i = 0
            while (i < document.getElementsByTagName("li").length) {
                ++i
            }
            breed.setAttribute("id", i)
            breed.addEventListener("click", function(){
                breed.style.color = "purple"
            })
            main.appendChild(breed);
        }))

}

function filterDogs(){
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", function(event){
        const value = event.target.value
        const list = document.querySelectorAll("li")
        list.forEach(function(list){
            if (list.innerText[0] === value) {
            return list.style.display = "list-item"
            }
            else {
            return list.style.display = "hidden"
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
    filterDogs()
    })
