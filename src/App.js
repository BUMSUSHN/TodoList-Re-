import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Router from "./shared/Router";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Router />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
//Home이랑 About은 App.js에 자식 컴포넌트이다.
