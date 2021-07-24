/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import moreIcon from './more.svg';
import { dragAndDrop, listItem } from './interactive.js';

export function statusUpdate(item, input, oneTodo, todoTasks) {

  if (item.checked) {
    input.classList.add('line-through');
    
  } else {
    input.classList.remove('line-through');
  }

  oneTodo.addEventListener('change', () => {
    const todo = todoTasks[item.index];
    todo.checked = !item.checked;
    todo.completed = !item.completed;
    /* eslint-disable no-use-before-define */
    dragAndDrop();
  });
}