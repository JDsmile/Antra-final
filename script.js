
fetch('http://localhost:3000/todos')
  .then((response) => response.json())
  .then((data) => console.log(data));
  
const inputBox = document.querySelector(".form-input")
const formSubmit = document.querySelector(".form-submit")
let input =""

inputBox.addEventListener("input", (event)=>{
  input = event.target.value

})

formSubmit.addEventListener("click", (event)=>{
event.preventDefault()
console.log(input)
})