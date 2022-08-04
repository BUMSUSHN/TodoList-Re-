import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { DetailStyle } from "./Detail.styled";

const Detail = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const { id } = useParams();
  // const Number = useSelector((state) => state.counter.number);
  return (
    <DetailStyle>
      {todoList.map((todo) => {
        if (todo.id === Number(id)) {
          return (
            <div>
              <Link to="/">뒤로가기</Link>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </DetailStyle>
  );
};

export default Detail;
