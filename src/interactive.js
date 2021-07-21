import { todoList, todoTasks } from './index.js';


export function dragAndDrop() {
 
 const draggables = todoList.querySelectorAll(".draggable")

 draggables.forEach((draggable) => {
   draggable.addEventListener("dragstart", () => {
     draggable.classList.add("dragging");
   });
 
   draggable.addEventListener("dragend", () => {
     draggable.classList.remove("dragging");
   });
 });
 todoList.addEventListener("dragover", (e) => {
   e.preventDefault();
   const afterElement = getDragAfterElement(todoList, e.clientY);
   const draggable = document.querySelector(".dragging");
   if (afterElement == null) {
     todoList.appendChild(draggable);
   } else {
     todoList.insertBefore(draggable, afterElement);
   }
 });
 
 function getDragAfterElement(container, y) {
   const draggableElements = [
     ...container.querySelectorAll(".draggable:not(dragging)"),
   ];
 
   return draggableElements.reduce(
     (closest, child) => {
       const box = child.getBoundingClientRect();
       const offset = y - box.top - box.height / 2;
       if (offset < 0 && offset > closest.offset) {
         return { offset: offset, element: child };
       } else {
         return closest;
       }
     },
     { offset: Number.NEGATIVE_INFINITY }
   ).element;
 }
}

