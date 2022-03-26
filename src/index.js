
document.addEventListener("DOMContentLoaded", () => {
  
const form = () => document.querySelector("#create-task-form")
  

 // attach a submit event to the form
 form().addEventListener("submit", handleSubmit)

function handleSubmit(e){
  e.preventDefault()
  // create a new todo <li> and append it to the ul
  const todoText = document.querySelector("#new-task-description").value
  const li = document.createElement("li")
  li.textContent = todoText
  // next to the the next also append a button with an x
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  deleteButton.addEventListener("click", handleDelete)
  li.append(deleteButton)
  tasks.append(li)
  // empty form
  form().reset()
}

function handleDelete(e) {
    e.target.parentNode.remove()
}

});
