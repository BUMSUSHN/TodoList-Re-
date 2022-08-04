import React from "react";
import Router from "./shared/Router";

function App() {
  return (
    <Router />
    // <>
    //   <div className="App">
    //     <Box>
    //       <Header />
    //       <TodoList />
    //     </Box>
    //     <Routes>
    //       {/* <Route path="/" element={<Form />}></Route> */}
    //       <Route path="/todoList/:name" element={<TodoList />}></Route>
    //     </Routes>
    //   </div>
    // </>
  );
}

export default App;
//Home이랑 About은 App.js에 자식 컴포넌트이다.
