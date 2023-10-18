// OBJECT is a collection of properties
// property is consist of key and value

let car = {
    
    name: 'Swift',
    modal: 2020,
    isNew: false,
    UsedBy: ['Ahmed', 'Wasif'],
    Image:
    "https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color : "Black",
    average: function(){
        return '10km/hr'
    }
}

//name = +prompt("enter car name")
//modal = +prompt("enter modal number")
//isNew = +prompt("car is new or not")
//color = +prompt("enter the color")


let carImg = document.getElementById('car_img')
let carName = document.getElementById('car_name')
let carmodal = document.getElementById('car_modal')
let carUsedBy = document.getElementById('car_UsedBy')
let carIsNew = document.getElementById('car_isnew')
let carcolor = document.getElementById('car_color')

console.log('carImg->', carImg)

carImg.src = car.Image
carName.innerText = car.name
carmodal.innerText = car.modal
carIsNew.innerText = car.isNew  ? "New" : "Old"
carUsedBy.innerText = car.UsedBy.join(',')
carcolor.innerText =  car.color
