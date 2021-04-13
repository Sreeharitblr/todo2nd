export const addTodo = (todo) => {
  return {
    type: "add/todo",
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "delete/todo",
    payload: id,
  };
};


