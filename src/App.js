import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import styled from "styled-components";
import Header from "./components/Header/Header";
// import Todo from "./components/todo/Todo";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

//Home이랑 About은 App.js에 자식 컴포넌트이다.
function App() {
  return (
    <>
      <div className="App">
        <Box>
          <Header />
          <TodoList />
        </Box>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/:name" element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  );
}

const Box = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 30px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export default App;
