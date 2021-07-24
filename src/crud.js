import { listItem, savedList } from './interactive.js';
import { todoTasks, taskInput, todoList } from './index.js'
import { btnClear } from './index.js'



export function createTask() {
  const form = document.querySelector('.to-do');
  
  form.addEventListener('submit', () => {
   console.log(form.value);
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

export function editTask(input, elem, form) {
  
  let newValue = ""
  input.setAttribute("name",elem.index)
  input.addEventListener('input',(e) =>
  {     
    let name  = e.target.name;
    newValue = e.target.value;
    e.preventDefault();  
  })

  form.addEventListener('submit',(e)=>{
    let p =e.target[0].name;

   todoTasks[p].description = newValue;
   savedList();
   
   
  })
}

export function deleteTask() {

  const deleteTask = todoList.querySelectorAll('.img');
  console.log(deleteTask);

}

export function clearTasks() {
  btnClear.addEventListener('click', () => {
    const pendingTasks = todoTasks.filter(
      (item) => item.checked !== true,
    );
    for(let i = 0; i < pendingTasks.length; i++) {
      pendingTasks[i].index = i;
    }
    localStorage.setItem('ToDo', JSON.stringify(pendingTasks));
    location.reload();
  });
}



