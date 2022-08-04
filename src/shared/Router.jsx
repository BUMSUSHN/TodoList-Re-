import React from "react";
import TodoList from "../components/todoList/TodoList";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Todo from "../components/todo/Todo";

const Router = () => {
  return (
    <>
      <div className="App">
        <Box>
          <Header />
          <TodoList />
        </Box>
      </div>
    </>
  );
};

const Box = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 30px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export default Router;
