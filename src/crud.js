import { savedList } from './interactive.js';
import { todoTasks, taskInput } from './index.js'



export function createTask() {
  const form = document.querySelector('.to-do');
  
  form.addEventListener('submit', () => {
   
    const newToDo = taskInput.value;
    if (newToDo) {
      todoTasks.push({
        description: newToDo,
        completed: false,
        index: todoTasks.length,
        checked: false,
      });

      savedList();
    }
  });
} 

function editTask() {}

function deleteTask() {}

function clearTasks() {}
