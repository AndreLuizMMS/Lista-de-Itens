/* let items = document.querySelector('.items') */

// SELECTING ELEMENTS
// console.log(items.parentNode)
// console.log(items.parentElement)
// .parentNode == .parentElement

// ChildNode

// console.log(items.childNodes) -- shows Line Break

// console.log(items)

// items.children[0].style.backgroundColor = 'red'

// First Child
// console.log(items.firstChild)
// console.log(items.firstElementChild) -- seleciona o elemento

// console.log(items.firstElementChild)
// items.firstElementChild.innerText = 'pega na minha'

// Last Child
// console.log(items.lastChild)
// console.log(items.lastElementChild)-- seleciona o elemento

// console.log(items.lastElementChild)
// items.lastElementChild.innerText = 'pega na minha'

// .nextElementSibling -- pega o próximo elemnto
// .previousElementSibling  -- pega o elemnto anterior

// CREATING ELEMENTS

// newDiv.className = 'div-1'             --Class Name
// newDiv.id = 'div-1'                   --Id Name
// newDiv.setAttribute('onclick', 'div') -- qlqr Atributo

/* let newDiv = document.createElement('div')
let newDivTxt = document.createTextNode(' pega na minha ')

newDiv.appendChild(newDivTxt)

let header = document.querySelector('.header')
let h1 = document.querySelector('.header-title')

header.insertBefore(newDiv, h1) */

// EVENTS
/*         function randomColors() {
          return '#' + Math.floor(Math.random() * 16777215).toString(16)
        }

var button = document.getElementById('button').addEventListener('click', click)

function click(e) {
  document.querySelector('.header-title').style.color = randomColors()
  console.log(e.type)  
}

var button1 = document.getElementById('btn')
var box = document.querySelector('.box')

var input = document.querySelector('.input')
input.addEventListener('input', click) */
