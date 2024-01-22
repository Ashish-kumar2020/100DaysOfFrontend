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
  unorderList.classList.add("todo-item"); // Adding a class to the <ul> element

  const listItem = document.createElement("li");
  listItem.classList.add("list-item"); // Adding a class to the <li> element

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button"); // Adding a class to the <button> element
  deleteBtn.textContent = "Delete";

  const editButton = document.createElement("button");
  editButton.classList.add("delete-button");
  editButton.textContent = "Edit Todo";

  listItem.textContent = currentTodo;
  inputTextArea.value = currentTodo;

  deleteBtn.addEventListener("click", () => {
    deleteTodo(unorderList);
  });

  editButton.addEventListener("click", () => {
    editTodo(inputTextArea, listItem, unorderList);
  });

  unorderList.appendChild(deleteBtn);
  unorderList.appendChild(editButton);
  todoList.appendChild(unorderList);
  unorderList.appendChild(listItem);

  console.log(currentTodo);
  inputTextArea.value = "";
}

function deleteTodo(parentList) {
  todoList.removeChild(parentList);
}

function editTodo(inputTextArea, listItem, unorderList) {
  inputTextArea.value = listItem.textContent;
}
