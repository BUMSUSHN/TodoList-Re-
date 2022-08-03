import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import styled from "styled-components";
import Header from "./components/Header/Header";
// import Todo from "./components/todo/Todo";
  



function App() {
  return (
    <>
      <div className="input-group">
        <Box>
          <Header />
          <TodoList/>
        </Box>
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


// const Box1 = styled.button`
//   /* display: flex;
//   flex-wrap: wrap;
//   gap: 70px; */
// `;

export default App;
