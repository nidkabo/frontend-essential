const main = () => {
  const todoInput = document.getElementById("todo");
  const todoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");

  // * Add event listener to button for enter a new todo
  todoButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "trash.svg");
    trashIcon.classList.add("trash");

    // * Check if the input field is still empty
    if (!todoInput.value) {
      alert("Please input something!");
      return;
    }

    newList.textContent = todoInput.value;

    newList.appendChild(trashIcon);

    todoList.appendChild(newList);

    // * clear form for the better ux
    todoInput.value = "";
  });

  // * Add event listener to todoList for detect that user clicked <li> element inside <ul> or not
  todoList.addEventListener("click", (e) => {
    // * If the user clicks LI, toggle class "checked" to the <li> tag
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }

    // * If the user clicks on an IMG element whose parent element is a <li> tag, and the <li> tag is a child of todoList
    if (e.target.tagName === "IMG") {
      todoList.removeChild(e.target.parentElement);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
