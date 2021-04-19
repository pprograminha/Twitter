import React from "react";
import {
  Container,
  SearchInput,
  SearchWrapper,
  Body,
  SearchIcon,
} from "./styles";
import RecommendationContainer from '../RecommendationContainer'
const index = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Pesquise" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <RecommendationContainer />
        <RecommendationContainer />
      </Body>
    </Container>
  );
};

export default index;
