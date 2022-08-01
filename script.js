
fetch('http://localhost:3000/todos')
  .then((response) => response.json())
  .then((data) => console.log(data));
  
const inputBox = document.querySelector(".form-input")
const formSubmit = document.querySelector(".form-submit")
let input =""

let data;

inputBox.addEventListener("input", (event)=>{
  input = event.target.value
  data = {"title":input,"completed":false}
})

formSubmit.addEventListener("click", (event)=>{
event.preventDefault()
fetch('http://localhost:3000/todos',{
    method :"POST",
    headers : {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  })
})

