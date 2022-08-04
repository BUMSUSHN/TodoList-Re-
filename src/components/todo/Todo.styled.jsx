import styled from "styled-components";

export const TodoBox = styled.div`
  border: 3px solid teal;
  width: 400px;
  background-color: white;
  border-radius: 12px;
  margin: 20px;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  text-align: center;
`;

export const DeleteButton = styled.div`
  border: none;
  height: 50px;
  border-radius: 12px;
  background-color: teal;
  width: 150px;
  display: flex;
  margin: 30px;
  padding: 10px;
  color: white;
  align-items: center;
  cursor: pointer;
`;

export const EditButton = styled.div`
  border: none;
  height: 50px;
  border-radius: 12px;
  background-color: orange;
  width: 150px;
  display: flex;
  margin: 30px;
  padding: 10px;
  color: white;
  align-items: center;
  cursor: pointer;
`;
