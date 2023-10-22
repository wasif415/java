

document
.getElementById('ChangeColorBtn')
.addEventListener('click', changeBodyColor)

document
.getElementById('changeCardColorBtn')
.addEventListener('click', changeCardbackgroundColor)


function generateRandomNumber() {
    const number = Math.round(Math.random() *190)
    return number
}


function changeBodyColor () {
    let body = document.getElementsByTagName('body')
    console.log(body[0])
    body[0].style.backgroundColor = `rgb(
        ${generateRandomNumber()},
        ${generateRandomNumber()},
        ${generateRandomNumber()}
    )`

}


function changeCardbackgroundColor () {
    let allCard = document.getElementsByClassName('card-div')

}