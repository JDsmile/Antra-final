
const API_URL = "http://localhost:3000/"
const PATH = "todos"

function loadData(){
  fetch(`${API_URL}${PATH}`)
  .then((response) => response.json())
  .then((data) => display(data));
}

function display(data){
  const todos = data.map((item,index) =>{
    
    return `  
      <div class="todo-item">
        <p class="todo-content ${item.completed ? "completed": "" }" id=${item.id} onclick="completedTodo(${item.id})">${item.title}
        </p>
        <div>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small" class="small edit" fill="#e6e2d3"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>

          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small" class="small delete" onclick="deleteTodo(${item.id})" fill="#e6e2d3"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>
     </div>    `
  })
  document.querySelector('.todos-container').innerHTML = todos.join('')
}

//delete the corrspond todo and reload
function deleteTodo(id) {
  fetch([API_URL+PATH+"/"+id], { method: 'DELETE' })
  window.location.reload();
}

//compeleted todos
function completedTodo(id){
  document.getElementById(id).classList.add("completed")

  //change completed to true when todo is clicked
  fetch([API_URL+PATH+"/"+id],{
    method: "PATCH",
    headers : {
      'Content-Type': "application/json"
    },
    body : JSON.stringify({
      "title": data, "completed":true
    })
  })

}
const inputBox = document.querySelector(".form-input")
const formSubmit = document.querySelector(".form-submit")
let input =""
let data;

inputBox.addEventListener("input", (event)=>{
  input = event.target.value
  data = {"title":input,"completed":false}
})

//post request
formSubmit.addEventListener("click", (event)=>{
fetch([API_URL+PATH],{
    method :"POST",
    headers : {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  })
})

loadData()