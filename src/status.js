import { todoList, todoTasks } from "./index.js";

export function checkboxChange() {
  const checks = todoList.querySelectorAll(".one-todo");
  const task = todoList.querySelectorAll(".task");
  const div = todoList.querySelectorAll(".to-do-div");
  const image = todoList.querySelectorAll(".more");
  const newImage = document.createElement("img");
  const input = todoList.querySelectorAll(".label");
  newImage.src = "./src/delete.svg";
  newImage.classList.add("more");

  const texts = todoList.querySelectorAll(".label");

  const tasks = Array.from(todoList);
  todoTasks.forEach((elem, index) => {
    tasks.push(elem);
  });

  if (localStorage.getItem("Todo") === null) {
    window.localStorage.setItem("Todo", JSON.stringify(tasks));
  }
  const existing = JSON.parse(localStorage.getItem('Todo'));  



  



  todoTasks.forEach((elem, index) => {
    checks[index].addEventListener("change", (e) => {
      if (e.target.checked) {
        texts[index].classList.add("line-through");        
        existing[index].completed = true;
        window.localStorage.setItem('Todo', JSON.stringify(existing));
        // div[index].removeChild(image[index]);
        // div[index].appendChild(newImage);
      } else {
        existing[index].completed = false;
        window.localStorage.setItem('Todo', JSON.stringify(existing));
        texts[index].classList.remove("line-through");
        // div[index].removeChild(newImage);
        // div[index].appendChild(image[index]);
        div[index].classList.remove("task-background");
        input[index].classList.remove("task-background");
      }
    });
  });
}


