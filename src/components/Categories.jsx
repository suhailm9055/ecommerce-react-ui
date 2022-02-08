import  styled  from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
overflow: hidden;
height: 50vh;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Categories;
