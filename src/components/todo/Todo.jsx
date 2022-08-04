import React from "react";
import { TodoBox } from "./Todo.styled";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Detail from "../../pages/Detail";
import { DeleteButton } from "./Todo.styled";
import { EditButton } from "./Todo.styled";

//props는 부모 컴포넌트한테 받는 변수
const Todo = ({ title, content, isDone, deleteTodo, editTodo, id }) => {
  // console.log(isDone);

  const todoList = useSelector((state) => state.todos.todoList);
  // const navigate = useNavigate();
  console.log(id);
  return (
    <TodoBox>
      {/* <Link to={<Detail />} key={id}>
        <div>상세보기</div>
      </Link> */}
      <div className="Todo">
        <div>
          {/* <span onClick={()=> showMore(todo.id)}>자세히 보기</span> */}
          <h1>{title}</h1>
          <p>{content}</p>
          <DeleteButton
            onClick={() => {
              //alert
              // if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              deleteTodo(id);
              // }
            }}
          >
            삭제하기
          </DeleteButton>
          <EditButton
            onClick={() => {
              editTodo(id);
            }}
          >
            {isDone ? "취소" : "완료"}
          </EditButton>
        </div>
      </div>
    </TodoBox>
  );
};

export default Todo;

//삭제 1. 12번째줄 onClick 에 onDeleteHandler 작성
//삭제 2. 4번째줄 onDeleteHandler 작성
