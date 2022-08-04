import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      상세보기
    </button>
  );
};

export default Detail;
