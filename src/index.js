import './style.css';
import moreIcon from './more.svg';
import Icon from './enter.svg';
import recycle from './recycle.svg';
import dragAndDrop from './interactive.js'

function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) {
    element.className = className;
  }
  if (content) {
    element.textContent = content;
  }
  if (idName) {
    element.id = idName;
  }
  return element;
}

const todoTasks = [
  {
    description: 'Read the last chapiter of Ruby book',
    completed: false,
    index: 0,
  },
  {
    description: 'Grab a cup of coffee',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the marked',
    completed: false,
    index: 2,
  },
];

const todo = elementGenerator('div', 'container', null, null);
const todoHeader = elementGenerator('div', 'title', null, null);
const header = elementGenerator('div', 'to-do-title', null, null);
header.textContent = "Today's To Do";
todoHeader.appendChild(header);

const myRecycle = new Image();
myRecycle.src = recycle;
myRecycle.classList.add('recycle');
todoHeader.appendChild(myRecycle);

const form = elementGenerator('form', 'to-do', null, null);
const taskInput = elementGenerator('input', 'add-to-do', null, null);
taskInput.placeholder = 'Add to your list...';
form.appendChild(taskInput);

const enterIcon = new Image();
enterIcon.src = Icon;
enterIcon.classList.add('enter-icon');

form.appendChild(enterIcon);

export const todoList = elementGenerator('ul', 'to-do-list', null, null);

todoTasks.forEach((elem, i) => {
  todoList.innerHTML += `<li class="task draggable" draggable=true>
                             <div class="to-do-div">
                             <div>
                             <input class="one-todo" type="checkbox" id="${i}">
                             <form class="edit">
                             </div>                             
                             <input class="label" value='${todoTasks[i].description}'></input>
                             </form>
                             <img src="http://localhost:8080/3adb9cb42cd31f0448c7.svg" class="more"></div></li>`;
});

const todoDiv = elementGenerator('div', 'to-do-div', null, null);

const checkBox = elementGenerator('input', 'one-todo', null, null);
checkBox.type = 'checkbox';
const task = elementGenerator('span', 'label', 'Task number', null);
const divClear = elementGenerator('div', 'div-clear', null, null);
const btnClear = elementGenerator('button', 'clear', null, null);
btnClear.type = 'button';
btnClear.textContent = 'Clear All completed';
divClear.appendChild(btnClear);
const myIcon = new Image();
myIcon.src = moreIcon;
myIcon.classList.add('more');

todoDiv.appendChild(checkBox);

todoDiv.appendChild(task);
todoDiv.appendChild(myIcon);

todo.appendChild(todoHeader);
todo.appendChild(form);
todo.appendChild(todoList);
todo.appendChild(divClear);

const toDoContainer = document.getElementById('todo-container');
toDoContainer.appendChild(todo);

window.addEventListener('load', () => {
  dragAndDrop();
})