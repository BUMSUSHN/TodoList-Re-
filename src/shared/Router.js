// import React from "react";

// // 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "../page/About";
// import Home from "../page/Home";

// // 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>
//           <Home />
//           <About />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;

// //리액트에서 라우팅 처리하기

// //1. index.js에 BrowserRouter 적용하기
// //1-1. index.js에 import { BrowserRouter } from "react-router-dom";
// //1-2. <APP/> <BroswerRouter>로 감싸주기

// //2. 세부 화면 만들기
// //2-1. 컴포넌트 만들어준다는 뜻
// //2-2. src/page 에 새 파일 생성 Home.js / About.JS

// //3. App.js에서 Route 적용하기
// //3-1. import { Route } from "react-router-dom";
// //3-2. import Home from "./page/Home";
// //3-3. import About from "./page/About";
// //3-4. Route path="/">
// //3-5. <Home /> </Route> <Route path="/About"> <About /> </Route>

// //4. exact 적용하기
// //4-1. <Route path="/" exact>  "/" 경로에 exact 속성 붙여주기
// //4.2. exact는 "/"가 완전히 똑같으면 그때 보여줘라

// //5. URL 파라미터 사용하기
// //5-1. <Route path="/about/:about_list">
// //5-2. 5-1.이 정확하게 작동하지는 확인하고 싶으면 <Route path="/about/:about_list" exact>
// //5-2. 끝에 exact 붙여서 뷰에서 어떻게 보이는지 확인
// //5-3. 파라미터를 쓸 수만 있으면 의미가 별로 없죠. 이 About이라는 컴포넌트 안에서
// //5-3. 불러올 수 있어야 되겠잖아요.
// //5-4. 불러오는 방법 첫번째.. react-router-dom의 훅 사용
// //5-5. About.jsx에 import { useParams } 라는 훅 사용
// //5-6. About.jsx에 const와 return 사이에 const About_list = useParams(); 코드 입력

// //6. 링크 이동 시키기
