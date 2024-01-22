const inputTextArea = document.getElementById("input-textarea");
const todoList = document.getElementById("todos-list");

let currentTodo;
function enterTodo() {
  const inputValue = inputTextArea.value;
  currentTodo = inputValue;
}

function addTodo() {
  // create a dynamic ul
  const unorderList = document.createElement("ul");
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.textContent = currentTodo;

  deleteBtn.addEventListener("click", () => {
    deleteTodo(unorderList);
  });
  unorderList.appendChild(deleteBtn);
  todoList.appendChild(unorderList);
  unorderList.appendChild(listItem);

  console.log(currentTodo);
  inputTextArea.value = "";
}

function deleteTodo(parentList) {
  todoList.removeChild(parentList);
}
