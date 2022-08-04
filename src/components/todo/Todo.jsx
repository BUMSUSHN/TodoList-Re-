import React from "react";
import { TodoBox } from "./Todo.styled";
import { useSelector, useDispatch } from "react-redux";

//props는 부모 컴포넌트한테 받는 변수
const Todo = ({ title, content, isDone, deleteTodo, editTodo, id }) => {
  // console.log(isDone);

  const todoList = useSelector((state) => state.todos.todoList)


  return (
    <TodoBox>
      <div className="Todo">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <button className="DeleteButton"
            onClick={() => {
              //alert
              // if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              deleteTodo(id)
              // }
            }}
          >
            삭제하기
          </button>
          <button className="EditButton"
            onClick={() => {
              editTodo(id);
            }}
          >
            {isDone? "취소" : "완료"}
          </button>
        </div>
      </div>
    </TodoBox>
  );
};

export default Todo;

//삭제 1. 12번째줄 onClick 에 onDeleteHandler 작성
//삭제 2. 4번째줄 onDeleteHandler 작성
