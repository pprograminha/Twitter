import React from "react";
import { Container, Title, Wrapper } from "./styles";

import Recommendation from "./Recommendation";
const RecommendationContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Talvez você curta</Title>
        <Recommendation />
        <Recommendation />
        <Recommendation />
      </Wrapper>
    </Container>
  );
};

export default RecommendationContainer;
