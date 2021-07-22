import moreIcon from "./more.svg";
import { todoList, todoTasks, elementGenerator } from "./index.js";

function listItem(elem){
  const list = elementGenerator("li", "task draggable", null, null);
    const flex = elementGenerator("div", "flex", null, null);
    const oneTodo = elementGenerator("input", "one-todo", null, null);
    oneTodo.type = "checkbox";
    oneTodo.checked = elem.checked;
    
    const form = elementGenerator("form", "edit", null, null);
    const input = elementGenerator("input", "label", null, null);
    input.value = elem.description;
    const image = elementGenerator("img", "more", null, null);
    image.src = moreIcon;

    if (elem.checked) {
      input.classList.add("line-through");
    } else {
      input.classList.remove("line-through");
    }

    oneTodo.addEventListener("change", (e) => {
     const todo = todoTasks[elem.index]
     todo.checked = !elem.checked;
     dragAndDrop();
    });

    form.appendChild(input);
    flex.appendChild(oneTodo);
    flex.appendChild(form);
    list.appendChild(flex);
    list.appendChild(image);

    todoList.appendChild(list);

    list.addEventListener("mousedown", () => {
      list.setAttribute("draggable", true);
    });

    list.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("index", elem.index);
    });

    list.addEventListener("drop", (event) => {
      const draggedIndex = event.dataTransfer.getData("index");
      const dropIndex = elem.index;

      swap(draggedIndex, dropIndex);
      list.setAttribute("draggable", false);
    });

    list.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    return list;
}

export function dragAndDrop() {
  todoList.innerHTML = "";
  todoTasks.forEach((elem) => {
   const item =  listItem(elem);
   todoList.appendChild(item);
  });
  savedList();
}

function swap(draggedIndex, dropIndex) {
  const dragged = todoTasks[draggedIndex];
  const drop = todoTasks[dropIndex];

  todoTasks[draggedIndex] = drop;
  todoTasks[dropIndex] = dragged;

  dragged.index = dropIndex;
  drop.index = draggedIndex;

  dragAndDrop();
}

function savedList(){
  localStorage.setItem('ToDo', JSON.stringify(todoTasks));
}