import React, { useState } from "react";
import Todo from "./components/todo/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todos";

const TodoList = () => {
  const dispatch = useDispatch()
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");

  //9. 14~16번쨰 줄 가져오기
  const todoList = useSelector((state) => state.todos.todoList)
  const abcd = useSelector((state) => state.todos.abcd)
  const number = useSelector((state) => state.counter.number)

  const onAddTodo = () => {
    const todo = {
      title: title,
      content: content,
      id: todoList.length + 1,
      isDone: false,
    };

    //10. action을 사용하는거
    dispatch(addTodo(todo))
  };

  //onDeleteHandler가 실행되기 위한 조건은 targetId(매개변수)가 있을 때
  const onDeleteHandler = (targetId) => {
    // console.log(`${targetId}가 삭제되었습니다`);
    //filter는 내가 클릭한 값(배열)을 제외한 나머지 값(배열)만 화면에 뿌려준다.
    //여기서 newTodoList는 지역변수
    //알고보니 object(객체)
    const newTodoList = todoList.filter((todo) => todo.id !== targetId);
    //기존에 있던거 밀어내고, state를 교체
    //scope 유효범위
    //교체 전용 변수 (맞교체)
    console.log(typeof newTodoList);
    console.log(newTodoList);
    // SetTodoList(newTodoList);
  };
  
  //state 변경시 렌더링
  const onEditHandler = (targetId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === targetId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    // SetTodoList(newTodoList);
  };
  // const [onEdit, setOnEdit] = useState(false);
  // const toggleOnEdit = () => setOnEdit(!onEdit);

  // const [localContent, setLocalContent] = useState(content);

  return (
    <Layout>
      <Form>
        <p>제목</p>
        <input
          type="text"
          onChange={(e) => SetTitle(e.target.value)}
          value={title}
        ></input>
        <p>내용</p>
        <input
          type="text"
          onChange={(e) => SetContent(e.target.value)}
          value={content}
        />{" "}
        <button onClick={onAddTodo}>추가하기</button>
      </Form>

      <div>
        <h2>Working..</h2>
        <h2>{abcd}</h2>
        {todoList.map((todo) => {
          //  console.log(todo.isDone);
          if (!todo.isDone) {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
                isDone={todo.isDone}
              />
            );
          }
        })}
      </div>
      <div>
        <h2>Done..!</h2>
        {todoList.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
                isDone={todo.isDone}
              />
            );
          }
        })}
      </div>
    </Layout>
  );
};
//key는 리액트에서 컴포넌트 라이프사이클 돌아갈 때 가지고 가는 값
const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Form = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px auto 20px;
  gap: 70px;
  display: flex;
  border: 6px solid teal;
  border-radius: 12px;
  padding: 15px;
`;

export default TodoList;
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
