const title = document.querySelector("#title")
const description = document.querySelector(".description")
const fruta = document.querySelector("#fruta")

//console.log(title)
//console.log(description)

title.classList.add("danger")

title.nextElementSibling.classList.add("hide")

title.addEventListener("click", function(){
    //alert("oi")
    //title.nextElementSibling.classList.remove("hide")
    title.nextElementSibling.classList.toggle("hide")
})

const fruits = [
    {
        name: "uva",
        value: 8.99,
    },
    {
        name: "pera",
        value: 10,
    },
    {
        name: "Lichia",
        value: 10,
    },
    {
        name: "castanha do pará",
        value: 100,
    },
]

console.log(fruits)

fruits.push({name: "melão", value: 7.99})
fruits.push({name: "maça", value: 7.99})
fruits.pop()

console.log(fruits)
console.log(fruits[3])
console.log(fruits.length)

fruta.textContent = fruits[3].name

fruta.textContent = `${fruits[2].name} ${fruits[2].value}`

for (let index = 0; index < fruits.length; index++) {
    //  const element = array[index];
    console.log(fruits[index].name)
    console.log(fruits[index].value)
}