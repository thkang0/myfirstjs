const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.getElementById("todo-list")

let todos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
function removeTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(li.id);
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", removeTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    //console.log(li);
    todoList.appendChild(li);

}

function storeToDo(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text: newToDo,
        id: Date.now()
    }
    todos.push(todoObj);
    paintToDo(todoObj);
    saveToDos();
}

todoForm.addEventListener("submit", storeToDo);    

const savedTodos = localStorage.getItem("todos");
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}
