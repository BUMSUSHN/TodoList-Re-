import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //2.<provider store 넣기

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// <React.StrictMode>
// </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//index.js
//사실상 프로젝트 시작점

//ReactDOM 을 렌더링 할거다(어디에다가 뭘 렌더링할 건지를 정해주는거)
// ReactDOM.render(

// 첫번째 인자 -> 뭘
// 첫번째 인자에 두번째 인자를 렌더링 시키겠다는 것
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

// 두번째 인자 ->어디에
//   document.getElementById('root')
// )
//  public/index.html에 있는 31번째줄  <div id="root"> 를 찾아서 렌더링하겠다는 것

//리액트에서 라우팅 처리하기

//1. index.js에 BrowserRouter 적용하기
//1-1. index.js에 import { BrowserRouter } from "react-router-dom";
//1-2. <APP/> <BroswerRouter>로 감싸주기

//2. 세부 화면 만들기
//2-1. 컴포넌트 만들어준다는 뜻
//2-2. src/page 에 새 파일 생성 Home.js / About.JS

//3. App.js에서 Route 적용하기
//3-1. import { Route } from "react-router-dom";
//3-2. import Home from "./page/Home";
//3-3. import About from "./page/About";
//3-4. Route path="/">
//3-5. <Home /> </Route> <Route path="/About"> <About /> </Route>

//4. exact 적용하기
//4-1. <Route path="/" exact>  "/" 경로에 exact 속성 붙여주기
//4.2. exact는 "/"가 완전히 똑같으면 그때 보여줘라

//5. URL 파라미터 사용하기
//5-1. <Route path="/about/:about_list">
//5-2. 5-1.이 정확하게 작동하지는 확인하고 싶으면 <Route path="/about/:about_list" exact>
//5-2. 끝에 exact 붙여서 뷰에서 어떻게 보이는지 확인
//5-3. 파라미터를 쓸 수만 있으면 의미가 별로 없죠. 이 About이라는 컴포넌트 안에서
//5-3. 불러올 수 있어야 되겠잖아요.
//5-4. 불러오는 방법 첫번째.. react-router-dom의 훅 사용
//5-5. About.jsx에 import { useParams } 라는 훅 사용
//5-6. About.jsx에 const와 return 사이에 const About_list = useParams(); 코드 입력

//6. 링크 이동 시키기
