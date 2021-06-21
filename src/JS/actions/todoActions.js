import { ADD_TODO } from "../actionstypes/todoActionsTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
