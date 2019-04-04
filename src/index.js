// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(function(jason){
     
    const dogContainerTag = document.querySelector("#dog-image-container")
    return jason.message.forEach(function(url){
        let newImgTag = document.createElement("img")
        newImgTag.src = url
        // console.log (newImgTag.src)
        dogContainerTag.appendChild(newImgTag)
    })
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogUlTag = document.querySelector("#dog-breeds")
const selectedTag = document.querySelector("#breed-dropdown")


fetch(breedUrl)
.then (response => response.json())
.then(function(jason){
    // console.log(Object.keys(jason.message))
    return Object.keys(jason.message).forEach(function(breed){
        let newLiTag = document.createElement("li")
        newLiTag.textContent = breed
        newLiTag.dataset.action = "colorChange"
        // debugger
        dogUlTag.appendChild(newLiTag)
    }) 
    
})

function getAllBreeds(value){
    fetch(breedUrl)
        .then(response => response.json())
        .then(function (json) {
            // console.log(Object.keys(jason.message))
            return Object.keys(json.message).forEach(function (breed) {
                if (breed.charAt(0) === value){
                let newLiTag = document.createElement("li")
                newLiTag.textContent = breed
                newLiTag.dataset.action = "colorChange"
                dogUlTag.appendChild(newLiTag)
                }
            })

        })
}

//change colors when user clicks 
dogUlTag.addEventListener("click", function (e) {
    if (e.target.dataset.action === "colorChange"){
        e.target.style.color = "brown"
    }
    // console.log(e.target)
})

selectedTag.addEventListener("change", function (e) {
    // console.log(e.target.value)
    const liTags = document.querySelectorAll("li")
    // litags[0].innerText[0]
     liTags.forEach(function (li) {
        li.remove()
        // if (li.innerText[0] !== e.target.value) {    
        // }
    })

    getAllBreeds(e.target.value)

// element.options[element.selectedIndex].value

// selectedTag.addEventListener("change",function(e){
//     // console.log(e.target.value)
//     const liTags = document.querySelectorAll("li")
//     // litags[0].innerText[0]
//     return liTags.forEach(function(li){
//         if (li.innerText[0] !== e.target.value){
//             console.log("i was selected");
//             li.remove()
//         }
//     })
})
