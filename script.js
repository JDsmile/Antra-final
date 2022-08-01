

function loadData(){
  fetch('http://localhost:3000/todos')
  .then((response) => response.json())
  .then((data) => display(data));
}

function display(data){

  const todos = data.map((item,index) =>{
    return `  
      <div class="todo-item">
      
        <p>${item.title}
        </p>
        <div>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small" class="small edit" fill="#e6e2d3"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small" class="small delete" onclick="deleteTodo()" fill="#e6e2d3"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>
     </div>
      `
  })

  document.querySelector('.todos-container').innerHTML = todos.join('')
  let deleteBtn = document.querySelectorAll(".delete")

  deleteBtn.forEach((btn)=>btn.addEventListener("click",()=>{
    data.forEach((item)=>[
      deleteTodo(item.id)
    ])
  }))
}

//bug
function deleteTodo(id) {
  fetch('http://localhost:3000/todos/'+id, { method: 'DELETE' })
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
fetch('http://localhost:3000/todos/',{
    method :"POST",
    headers : {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  })
})

loadData()