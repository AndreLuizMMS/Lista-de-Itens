// DOM Manipulation
let headerTitle = document.querySelector('.header-title')
let header = document.querySelector('.header')

// header.innerHTML = '<h3>Olá</h3>'
// header.innerText = 'Olá'
// header.textContent = 'Olá'

// STYLE
header.style.borderBottom = '5px solid '
let pItems = document.getElementsByTagName('p')
for (i = 0; pItems.length > i; i++) {
  pItems[i].style.fontWeight = 'bold'
  pItems[i].style.color = 'red'
  pItems[i].style.backgroundColor = 'black'
  pItems[i].style.borderColor = 'green'
  console.log(pItems[i])
}

// traverse
