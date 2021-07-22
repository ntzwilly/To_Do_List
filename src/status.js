import { todoList, todoTasks } from "./index.js";

export function update() {
  const list = document.getElementsByTagName('li');
  const taskArr = [];

  if(list.length !== 0){
    Array.from(list).forEach((li, index) => {
      const completed = li.getElementsByTagName('input')[0].checked;
      const description = li.getElementsByTagName('input')[1].value;
      const id = li.getElementsByTagName('input')[0].id;

      const task = {
        completed,
        description,
        id,
      };
      taskArr.push(task);
    }); 
  }
  
  return taskArr;
}


export function checkboxChange() {
  const checks = todoList.querySelectorAll(".one-todo");
  const newImage = document.createElement("img");
  const input = todoList.querySelectorAll(".label");
  newImage.src = "./src/delete.svg";
  newImage.classList.add("more");

  const texts = todoList.querySelectorAll(".label");  

  todoTasks.forEach((elem, index) => {
    
  });
}
