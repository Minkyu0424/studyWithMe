const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function sayHello(item) {
  console.log("Hello", item);
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  }

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); savedToDos
  if(toDos.length < 5){
    weather.classList.remove('hidden');
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  if(toDos.length >= 5){
    weather.classList.add('hidden');
  }
  if (toDos.length >= 7){
    alert("과유불급! 7개 이상부터는 해결한 후, 또 추가하세요!");
    console.log(toDos);
  }
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //로컬 스토리지에 업데이트
  parsedToDos.forEach(paintToDo);
}
