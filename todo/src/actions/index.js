export const ADD_TODO = 'ADD_TODO';
export function addTodo(info) {
  console.log(info);
  return {
    type: ADD_TODO,
    payload: info
  };
}