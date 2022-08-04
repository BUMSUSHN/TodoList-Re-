//3. state
const initialState = {
  //첫번째 state
  todoList: [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ],
  //두번째 state
  // abcd: "공부",
};
//같은 모듈안에 만들려고하면 4,5,6
//모듈을 하나 더 만들려고 하면 추가로 configstore.js 에 등록을 해주어야한다.

//4. action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";

//5. actionCreator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    //payload: payload, << 이렇게 써줘도 되고,
    // 자바스크립트 문법에서  key : value 같으면 단어 하나만 써도 된다.
    payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

//6. reducer
//실질적으로 어떻게 동작할건지
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // const newTodoList = state.
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case DELETE_TODO:
      const newTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todoList: newTodoList,
      };

    case EDIT_TODO:
      // console.log("여기야");
      const newEditList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todoList: newEditList,
      };
    default:
      return state;
  }
};

//7.export default todos
export default todos;
