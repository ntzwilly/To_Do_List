/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { dragAndDrop } from './interactive.js';

export function statusUpdate(item, input, oneTodo, todoTasks) {
  if (item.checked) {
    input.classList.add('line-through');
  } else {
    input.classList.remove('line-through');
  }

  oneTodo.addEventListener('change', () => {
    const todo = todoTasks[item.id];
    todo.checked = !item.checked;
    todo.completed = !item.completed;
    /* eslint-disable no-use-before-define */
    dragAndDrop();
  });
}