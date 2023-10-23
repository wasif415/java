
let container = document.getElementById('container')

function createChild() {
  let div = document.createElement('div')
    div.className = 'test-div'


let divTittleEl = document.createElement('h2')
divTittleEl.className = 'test-div-tittle'
divTittleEl.innerText = document.getElementById('text').value

let divBtnEl = document.createElement('button')
divBtnEl.className = 'test-div-button'
divBtnEl.innerText = 'delete'
divBtnEl.onclick = function(){
    div.remove()
}

div.appendChild(divTittleEl)
div.appendChild(divBtnEl)

container.appendChild(div)

}