var items = JSON.parse(localStorage.getItem('items')) || [];
console.log(localStorage)

function renderItems() {
  var itemsUl = document.querySelector('.items')
  itemsUl.innerHTML = ''

  for (const item of items) {
    // criando li e botão delete
    var liCreate = document.createElement('li')
    var buttonCreate = document.createElement('button')

    // atribuindo valor ao li
    itemsUl.appendChild(liCreate)
    liCreate.innerText = item

    // atribuindo valor ao li
    liCreate.appendChild(buttonCreate)
    buttonCreate.innerText = 'X'

    // Deletar item
    buttonCreate.onclick = () => {
      items = items.filter(e => e !== item)
      renderItems()
      salvarItems()
    }
  }
}

function addItems() {
  // pegando o valor do input
  var input = document.querySelector('.add-item-inpt')

  var itemTxt = input.value

  //error handler
  if (itemTxt === '') {
    return alert('[ ERRO ] Valores Inválidos')
  }

  // valor do input pro array
  items.push(itemTxt)

  renderItems()
  salvarItems()

  input.value = ''
}

// botao submit adiciona ao array
var subButton = (document.querySelector('#submit-btn').onclick = addItems)

let input = document.querySelector('.add-item-inpt')

const salvarItems = () => {
  localStorage.setItem('items', JSON.stringify(items))
}

renderItems()