import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handlefilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };
  console.log(filters);
  
  return (
    <>
      <Container>
        <Announcements />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handlefilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Gray</Option>
            </Select>
            <Select name="size" onChange={handlefilters}>
              <Option disabled>Size</Option>
              <Option>XXL</Option>
              <Option>XL</Option>
              <Option>L</Option>
              <Option>M</Option>
              <Option>S</Option>
              <Option>XS</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select  onChange={(e)=>setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="high">Price (Highest First)</Option>
              <Option value="low">Price (Lowest First)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter /> 
      <Footer />
    </>
  );
};

export default ProductList;
