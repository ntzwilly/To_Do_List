import { dragAndDrop } from './interactive.js';

export function statusUpdate(item, input, oneTodo, todoTasks) {
  if (item.checked) {
    input.classList.add('line-through');
  } else {
    input.classList.remove('line-through');
  }

  oneTodo.addEventListener('change', () => {
    const todo = todoTasks[item.index];
    todo.checked = !item.checked;
    /* eslint-disable no-use-before-define */
    dragAndDrop();
  });
}