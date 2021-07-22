/* eslint-disable import/no-cycle */
import moreIcon from './more.svg';
import { todoList, todoTasks, elementGenerator } from './index.js';
import { statusUpdate } from './status.js';

function savedList() {
  localStorage.setItem('ToDo', JSON.stringify(todoTasks));
}

function listItem(elem) {
  const list = elementGenerator('li', 'task draggable', null, null);
  const flex = elementGenerator('div', 'flex', null, null);
  const oneTodo = elementGenerator('input', 'one-todo', null, null);
  oneTodo.type = 'checkbox';
  oneTodo.checked = elem.checked;

  const form = elementGenerator('form', 'edit', null, null);
  const input = elementGenerator('input', 'label', null, null);
  input.value = elem.description;
  const image = elementGenerator('img', 'more', null, null);
  image.src = moreIcon;

  statusUpdate(elem, input, oneTodo, todoTasks);

  form.appendChild(input);
  flex.appendChild(oneTodo);
  flex.appendChild(form);
  list.appendChild(flex);
  list.appendChild(image);

  todoList.appendChild(list);

  list.addEventListener('mousedown', () => {
    list.setAttribute('draggable', true);
  });

  list.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('index', elem.index);
    list.classList.add('dragging');
  });

  list.addEventListener('dragend', () => {
    list.classList.remove('dragging');
  });

  function swap(draggedIndex, dropIndex) {
    const dragged = todoTasks[draggedIndex];
    const drop = todoTasks[dropIndex];

    todoTasks[draggedIndex] = drop;
    todoTasks[dropIndex] = dragged;

    dragged.index = dropIndex;
    drop.index = draggedIndex;
    /* eslint-disable no-use-before-define */
    dragAndDrop();
  }

  list.addEventListener('drop', (event) => {
    const draggedIndex = event.dataTransfer.getData('index');
    const dropIndex = elem.index;

    swap(draggedIndex, dropIndex);
    list.setAttribute('draggable', false);
  });

  list.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  return list;
}

/* eslint-disable import/prefer-default-export */
export function dragAndDrop() {
  todoList.innerHTML = '';
  todoTasks.forEach((elem) => {
    const item = listItem(elem);
    todoList.appendChild(item);
  });
  savedList();
}
