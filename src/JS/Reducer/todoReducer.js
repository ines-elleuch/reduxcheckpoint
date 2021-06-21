// const initialState = {todolist[]};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,

        todolist: [...state, todoList, payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
