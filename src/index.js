console.log('%c HI', 'color: firebrick')

function firstChal() {
  const dogImageContainer = document.querySelector('div')
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(function(json){
    [...json.message].forEach(img =>
      dogImageContainer.innerHTML += `<img src='${img}'>`
    )
  })
}

function secondChal(){
  let ul = document.querySelector('ul')
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(function(json){
    const arr = Object.keys(json.message)
    Object.keys(json.message).forEach(breed => ul.innerHTML += `<li> ${breed} </li>`)
  })
};


function thirdChal(){
  let ul = document.querySelector('ul')
  ul.addEventListener('click',(e) => {
      e.target.style.color = '#FF8C00'
  })
};


function fourthChal(){
  secondChal()
  let ul = document.querySelector('ul')
  let selection = document.getElementById('breed-dropdown')
  selection.addEventListener('change',function(e){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(function(json){
    ul.innerHTML = ''
    arr = Object.keys(json.message).filter(name => name.includes(selection.value)),
    arr.forEach(breed => ul.innerHTML += `<li> ${breed} </li>`)
  })
})
};


document.addEventListener('DOMContentLoaded', () => {
firstChal()
thirdChal()
fourthChal()
});
